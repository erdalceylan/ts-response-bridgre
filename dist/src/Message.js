"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by erdal on 30.10.2017.
 */
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.isSuccess = function () {
        return this.type == Message.TYPE_SUCCESS;
    };
    Message.prototype.isNotice = function () {
        return this.type == Message.TYPE_NOTICE;
    };
    Message.prototype.isError = function () {
        return this.type == Message.TYPE_ERROR;
    };
    Message.prototype.getKey = function () {
        return this.key;
    };
    Message.prototype.setKey = function (key) {
        this.key = key;
        return this;
    };
    Message.prototype.getText = function () {
        return this.text;
    };
    Message.prototype.setText = function (text) {
        this.text = text;
        return this;
    };
    Message.prototype.getType = function () {
        return this.type;
    };
    Message.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    Message.TYPE_SUCCESS = "success";
    Message.TYPE_NOTICE = "notice";
    Message.TYPE_ERROR = "error";
    return Message;
}());
exports.Message = Message;
