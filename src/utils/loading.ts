import loading, { Options, Loading } from 'loading-cli';

// loading.start({
//   color: 'red',
//   text: 'begin',
// });
// setTimeout(() => {
//   loading.warn('警告');
//   setTimeout(() => {
//     loading.info('提示');
//     setTimeout(() => {
//       loading.stop();
//       setTimeout(() => {
//         loading.start('第二次');
//         setTimeout(() => {
//           loading.stop();
//         }, 2000)
//       }, 2000)
//     }, 2000)
//   }, 2000)
// }, 2000)

class Load {
  load: Loading;
  constructor() {
    this.load = null;
  }
  /**
   * @param options 
   * 开始loading状态 第二次开始传string类型
   */
  start (options: Options | string) {
    if (!this.load) {
      typeof options === 'object'
        && !options.frames
          && (options.frames = ['.', '.', 'o', 'o', 'O', 'O', '°', '°', 'O', 'O', 'o', 'o', '.', '.']);
      typeof options === 'string'
        && (options = { text: options, frames: ['.', '.', 'o', 'o', 'O', 'O', '°', '°', 'O', 'O', 'o', 'o', '.', '.'] });
      this.load = loading(options).start();
    } else {
      this.load.start(options as string);
    }
  }
  /**
   * 停止loading
   */
  stop () {
    this.load && this.load.stop();
    this.load = null;
  }
  succeed(text = 'success') {
    this.load && this.load.succeed(text);
  }
  warn (text: string) {
    this.load && this.load.warn(text);
  }
  info (text: string) {
    this.load && this.load.info(text);
  }
}

export default new Load();
