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

// 顶部搜索框
const TopView = styled.View`
height: ${CS.h(74)}px;
background: ${colors.main};
padding: 0 ${CS.w(12)}px;
align-items: center;
flex-direction: row;
`;
const SearchView = styled.View`
width: ${CS.w(320)}px;
height: ${CS.h(28)}px;
background: #fff;
flex-direction: row;
align-items: center;
padding-left: ${CS.w(6)}px;
margin-right: ${CS.w(12)}px;
`;
const SearchInput = styled.TextInput.attrs({
  underlineColorAndroid: "transparent"
})`
flex: 1;
padding: 0;
margin-left: ${CS.w(6)}px;
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

  TopView,
  SearchView,
  SearchInput,

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