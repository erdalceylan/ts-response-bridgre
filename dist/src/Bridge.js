"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Message_1 = require("./Message");
/**
 * Created by erdal on 30.10.2017.
 */
var Bridge = /** @class */ (function () {
    function Bridge() {
        this.data = {};
        this.messages = [];
        this.status = 0;
    }
    Bridge.prototype.getStatus = function () {
        return this.status;
    };
    Bridge.prototype.setStatus = function (value) {
        this.status = value;
        return this;
    };
    Bridge.prototype.getData = function (key, _default) {
        if (key !== undefined) {
            if (Object.prototype.hasOwnProperty.call(this.data, key)) {
                return this.data[key];
            }
            return _default;
        }
        return this.data;
    };
    Bridge.prototype.setData = function (data) {
        this.data = data;
    };
    Bridge.prototype.addData = function (key, value) {
        if (key != undefined) {
            this.data[key] = value;
        }
        return this;
    };
    Bridge.prototype.getMessage = function (key, _default) {
        if (_default === void 0) { _default = undefined; }
        if (key !== undefined) {
            for (var i = 0; i < this.messages.length; i++) {
                if (this.messages[i].getKey() == key) {
                    return this.messages[i];
                }
            }
            return _default;
        }
        return _default;
    };
    Bridge.prototype.getMessages = function () {
        return this.messages;
    };
    Bridge.prototype.addMessage = function (message) {
        this.messages.push(message);
        return this;
    };
    Bridge.prototype.hasSuccess = function () {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].isSuccess()) {
                return true;
            }
        }
        return false;
    };
    Bridge.prototype.hasNotice = function () {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].isNotice()) {
                return true;
            }
        }
        return false;
    };
    Bridge.prototype.hasError = function () {
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].isError()) {
                return true;
            }
        }
        return false;
    };
    Bridge.parse = function (jsonData) {
        var bridge = new Bridge();
        if (Object.prototype.hasOwnProperty.call(jsonData, "data")) {
            bridge.setData(jsonData.data);
        }
        if (Object.prototype.hasOwnProperty.call(jsonData, "status")) {
            var status_1 = parseInt(jsonData.status);
            if (status_1 > 0 || status_1 < 1) {
                bridge.setStatus(status_1);
            }
        }
        if (Object.prototype.hasOwnProperty.call(jsonData, "messages")) {
            var rMessages = jsonData.messages;
            if (rMessages instanceof Array) {
                rMessages.forEach(function (value) {
                    var message = new Message_1.Message()
                        .setKey(value.key)
                        .setText(value.message);
                    switch (value.type) {
                        case Message_1.Message.TYPE_SUCCESS:
                        case Message_1.Message.TYPE_NOTICE:
                        case Message_1.Message.TYPE_ERROR:
                            message.setType(value.type);
                            break;
                    }
                    bridge.addMessage(message);
                });
            }
        }
        return bridge;
    };
    return Bridge;
}());
exports.Bridge = Bridge;
