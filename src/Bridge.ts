import {Message} from "./Message";
/**
 * Created by erdal on 30.10.2017.
 */
export class Bridge {

    private data: any = {};
    private messages: Message[] = [];
    private status: number = 0;

    constructor() {
    }

    public getStatus(): number {
        return this.status;
    }

    public setStatus(value: number): Bridge {
        this.status = value;
        return this;
    }

    public getData(key: string, _default: any): any {
        if (key !== undefined) {
            if (Object.prototype.hasOwnProperty.call(this.data, key)) {
                return this.data[key];
            }
            return _default;
        }
        return this.data;
    }

    public setData(data: any) {
        this.data = data;
    }

    public addData(key: string, value: any): Bridge {
        if (key != undefined) {
            this.data[key] = value;
        }

        return this;
    }

    public getMessage(key: string, _default: any = undefined): Message {
        if (key !== undefined) {
            for (var i = 0; i < this.messages.length; i++) {
                if (this.messages[i].getKey() == key) {
                    return this.messages[i];
                }
            }
            return _default;
        }
        return _default;
    }

    public getMessages(): Message[] {
        return this.messages;
    }

    public addMessage(message: Message): Bridge {
        this.messages.push(message);
        return this;
    }

    hasSuccess(): boolean {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].isSuccess()) {
                return true;
            }
        }
        return false;
    }

    hasNotice(): boolean {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].isNotice()) {
                return true;
            }
        }
        return false;
    }

    hasError(): boolean {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].isError()) {
                return true;
            }
        }
        return false;
    }


    public static parse(jsonData: any): Bridge {

        let bridge = new Bridge();

        if (Object.prototype.hasOwnProperty.call(jsonData, "data")) {
            bridge.setData(jsonData.data);
        }

        if (Object.prototype.hasOwnProperty.call(jsonData, "status")) {

            let status = parseInt(jsonData.status);

            if( status > 0 || status < 1){

                bridge.setStatus(status);
            }
        }

        if (Object.prototype.hasOwnProperty.call(jsonData, "messages")) {

            let rMessages = jsonData.messages;

            if (rMessages instanceof Array) {

                rMessages.forEach((value: any) => {

                    let message = new Message()
                        .setKey(value.key)
                        .setText(value.message);

                    switch (value.type) {
                        case Message.TYPE_SUCCESS :
                        case Message.TYPE_NOTICE:
                        case Message.TYPE_ERROR:
                            message.setType(value.type);
                            break;
                    }

                    bridge.addMessage(message);
                });
            }
        }

        return bridge;
    }
}