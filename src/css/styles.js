import React from 'react';
import styled from 'styled-components/native';
import CS from './convertSize';

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

// 导航页View
const MainView = styled.View`
height: 100%;
background: #fff;
`;
const OccupiedView = styled.View`
flex:1
`;

//底部导航
const BottomNavView = styled.View`
width: 100%;
height: ${CS.h(68)}px;
`;
const BottomNavTopView = styled.View`
width: 100%;
height: ${CS.h(10)}px;
flex-direction: row;
`;
const BottomNavTopSmallView = styled.View`
width: ${CS.w(125)}px;
height: 100%;
align-items: center;
`;
const BottomNavFootView = styled.View`
width: 100%;
height: ${CS.h(58)}px;
flex-direction: row;
`;
const BottomNavFootSmallView = styled.View`
width: ${CS.w(125)}px;
height: 100%;
background: ${props => props.background || colors.main};
align-items: center;
justify-content: center;
`;
const BottomNavTopText = styled.Text`
font-family: Xingkai-SC-Bold;
font-size: 10px;
color: ${colors.white038};
`;
const BottomNavMiddleText = styled.Text`
font-size: 18px;
color: ${colors.white058};
line-height: 13;
`;
const BottomNavFootText = styled.Text`
font-size: 12px;
color: ${colors.white};
`;

// 右侧滑动菜单
const MenuScrollView = styled.ScrollView.attrs({
  scrollsToTop: false
})`
flex: 1;
width: 100%;
height: 100%;
backgroundColor: ${colors.main};
padding: 20px;
`;

// 导出
export {
  colors,
  AppStatusBar,

  MainView,
  OccupiedView,

  BottomNavView,
  BottomNavTopView,
  BottomNavTopSmallView,
  BottomNavFootView,
  BottomNavFootSmallView,
  BottomNavTopText,
  BottomNavMiddleText,
  BottomNavFootText,

  MenuScrollView,
}