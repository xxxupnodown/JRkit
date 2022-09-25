"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loading_cli_1 = __importDefault(require("loading-cli"));
/**
 *
 *  loading.start('loading.........');
 *  setTimeout(() => {
 *    loading.succeed();
 *  }, 2000)
 *  setTimeout(() => {
 *    loading.warn('warn!!!');
 *  }, 3000)
 *  setTimeout(() => {
 *    loading.start();
 *  }, 4000)
 *  setTimeout(() => {
 *    loading.stop();
 *  }, 5000)
 */
var Loading = /** @class */ (function () {
    function Loading() {
        this.load = null;
    }
    /**
     * 第一次参数可传options ，第二次仅可传string
     * @param options 参数
     */
    Loading.prototype.start = function (options) {
        !this.load && (this.load = (0, loading_cli_1.default)(typeof options === 'string' ?
            {
                text: options,
                frames: [".", ".", ".", "o", "o", "o", "O", "O", "O", "°", "°", "°", "O", "O", "O", "o", "o", "o", ".", ".", "."]
            }
            : __assign({ frames: [".", ".", ".", "o", "o", "o", "O", "O", "O", "°", "°", "°", "O", "O", "O", "o", "o", "o", ".", ".", "."] }, options)).start());
        this.load && this.load.start(options);
    };
    Loading.prototype.stop = function () { this.load.stop(); this.load = null; };
    /**
     * 成功样式
     * @param text 文本
     */
    Loading.prototype.succeed = function (text) {
        if (text === void 0) { text = 'success'; }
        this.load.succeed(text);
    };
    /**
     * 失败
     * @param text 文本
    */
    Loading.prototype.fail = function (text) {
        if (text === void 0) { text = 'fail'; }
        this.load.fail(text);
    };
    Loading.prototype.warn = function (text) { this.load.warn(text); };
    Loading.prototype.info = function (text) { this.load.info(text); };
    return Loading;
}());
exports.default = new Loading();
