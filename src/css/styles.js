import React from 'react';
import styled from 'styled-components/native';

// 颜色集合
const colors = {
  main: 'rgba(106, 190, 167, 0.87)',
  gray: 'rgba(94, 105, 115, 0.87)',
  pink: 'rgba(252, 200, 194, 0.87)',
  white: 'rgba(255, 255, 255, 0.87)',
  white058: 'rgba(255, 255, 255, 0.58)',
  white038: 'rgba(255, 255, 255, 0.38)',
};

// 透明度
// const opacitys = {main: 0.87};

/* 组件 */
// 状态栏
const AppStatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.main
})``;

// 导出
export {
  colors,
  AppStatusBar,
}