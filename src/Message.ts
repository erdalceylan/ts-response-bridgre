/**
 * Created by erdal on 30.10.2017.
 */
export class Message{

    static TYPE_SUCCESS = "success";
    static TYPE_NOTICE = "notice";
    static TYPE_ERROR = "error";

    private type:string;

    private key:string;

    private text:string;

    isSuccess() : boolean{
        return this.type == Message.TYPE_SUCCESS;
    }

    isNotice() : boolean{
        return this.type == Message.TYPE_NOTICE;
    }

    isError() : boolean{
        return this.type == Message.TYPE_ERROR;
    }

    getKey() : string{
        return this.key;
    }

    setKey(key : string) : Message{
        this.key = key;
        return this;
    }

    getText() : string{
        return this.text;
    }

    setText(text : string) : Message{
        this.text = text;
        return this;
    }

    getType() : string{
        return this.type;
    }

    setType(type : string) : Message{
        this.type = type;
        return this;
    }

}