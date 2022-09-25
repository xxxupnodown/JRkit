import loading, { Options } from 'loading-cli';
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
class Loading {
  load: any;
  constructor() {
    this.load = null;
  }
/**
 * 第一次参数可传options ，第二次仅可传string
 * @param options 参数
 */
  start(options: Options | string) {
    !this.load && (this.load = loading(
      typeof options === 'string' ?
        {
          text: options,
          frames: [".",".", "o", "o", "O", "O", "°", "°", "O", "O", "o", "o", ".", "."]
        }
        :
        {
          frames: [".",".", "o", "o", "O", "O", "°", "°", "O", "O", "o", "o", ".", "."],
          ...options
        }
    ).start()); 
    this.load && this.load.start((options as string)); 
  }
  stop() { this.load.stop(); this.load = null; }
/**
 * 成功样式
 * @param text 文本
 */
  succeed(text = 'success') { this.load.succeed(text); }
/**
 * 失败
 * @param text 文本
*/
  fail(text = 'fail') { this.load.fail(text); }
  warn(text) { this.load.warn(text); }
  info(text) { this.load.info(text); }
}

export default new Loading();
