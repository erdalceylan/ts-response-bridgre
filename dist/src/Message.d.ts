/**
 * Created by erdal on 30.10.2017.
 */
export declare class Message {
    static TYPE_SUCCESS: string;
    static TYPE_NOTICE: string;
    static TYPE_ERROR: string;
    private type;
    private key;
    private text;
    isSuccess(): boolean;
    isNotice(): boolean;
    isError(): boolean;
    getKey(): string;
    setKey(key: string): Message;
    getText(): string;
    setText(text: string): Message;
    getType(): string;
    setType(type: string): Message;
}
