import { Message } from "./Message";
/**
 * Created by erdal on 30.10.2017.
 */
export declare class Bridge {
    private data;
    private messages;
    private status;
    constructor();
    getStatus(): number;
    setStatus(value: number): Bridge;
    getData(key: string, _default: any): any;
    setData(data: any): void;
    addData(key: string, value: any): Bridge;
    getMessage(key: string, _default?: any): Message;
    getMessages(): Message[];
    addMessage(message: Message): Bridge;
    hasSuccess(): boolean;
    hasNotice(): boolean;
    hasError(): boolean;
    static parse(jsonData: any): Bridge;
}
