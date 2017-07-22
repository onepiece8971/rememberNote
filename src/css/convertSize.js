/* 根据实际屏幕尺寸转换对应的像素高宽 */
import {Dimensions} from 'react-native';

// 尺寸
const size = {width: 375, height: 667};

// 状态栏高度
const STATUS_BAR_HEIGHT = 23;

export default class CS {

  static w(w) {
    if (!this.width) {
      this.width = Dimensions.get('window').width;
    }
    return w * (this.width / size.width);
  }

  static h(h) {
    if (!this.height) {
      this.height = Dimensions.get('window').height;
    }
    return h * (this.height / size.height);
  }

  /**
   * 获取排除状态栏后的高度.
   *
   * @returns int
   */
  static getWindowsHeight() {
    if (!this.windowsHeight) {
      this.windowsHeight = this.h(size.height - STATUS_BAR_HEIGHT);
    }
    return this.windowsHeight;
  }

}