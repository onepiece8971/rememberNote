import React from 'react';
import styled from 'styled-components/native';
import convertSize from './convertSize';

// 颜色集合
const colors = {
  main: 'rgba(106, 190, 167, 0.87)',
  gray: 'rgba(94, 105, 115, 0.87)',
  pink: 'rgba(252, 200, 194, 0.87)',
};

// 透明度
// const opacitys = {main: 0.87};

/* 组件 */
// 状态栏
const AppStatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.main
})``;

// 顶部搜索框
const TopView = styled.View`
height: ${convertSize.getHeight(74)}px;
background: ${colors.main};
padding: 0 ${convertSize.getWidth(12)}px;
justify-content: center;
`;
const SearchView = styled.View`
width: ${convertSize.getWidth(320)}px;
height: ${convertSize.getHeight(28)}px;
background: #fff;
flex-direction: row;
align-items: center;
padding-left: ${convertSize.getWidth(6)}px;
`;
const SearchInput = styled.TextInput.attrs({
  underlineColorAndroid: "transparent"
})`
flex: 1;
padding: 0;
margin-left: ${convertSize.getWidth(6)}px;
`;

// 轮播图
const CarouselImage = styled.Image.attrs({
  source : require('./img/carouse.jpg'),
})`
width: 100%;
height: ${convertSize.getHeight(165)}px;
`;

// 卡片集
const CardsView = styled.View`
width: 100%;
height: ${convertSize.getHeight(330)}px;
padding: 0 ${convertSize.getWidth(12)}px;
margin: ${convertSize.getHeight(10)}px 0 0;
`;
const CardFlatListView = styled.View`
flex-flow: row wrap;
`;
const CardRightView = styled.View`
width: ${convertSize.getWidth(170)}px;
height: ${convertSize.getHeight(160)}px;
margin-bottom: ${convertSize.getHeight(10)}px;
`;
const CardLeftView = CardRightView.extend`
margin-right: ${convertSize.getWidth(11)}px;
`;
const CardTopImage = styled.Image`
width: 100%;
height: ${convertSize.getHeight(110)}px;
`;
const CardMiddleView = styled.View`
width: 100%;
height: ${convertSize.getHeight(30)}px;
flex-direction: row;
align-items: center;
`;
const CardMiddleImage = styled.Image.attrs({
  source : require('./img/head.jpg'),
})`
width: ${convertSize.getWidth(20)}px;
height: ${convertSize.getHeight(20)}px;
border-radius: ${convertSize.getWidth(20)}px;
margin: 0 ${convertSize.getWidth(10)}px;
`;
const CardMiddleTextView = styled.View`
width: ${convertSize.getWidth(14)}px;
height: 100%;
flex:1;
justify-content: center;
`;
const CardMiddleTopText = styled.Text`
font-family: Microsoft YaHei;
font-size: ${convertSize.getWidth(10)}px;
color: ${colors.gray};
`;
const CardMiddleBottomText = styled.Text`
font-family: Microsoft YaHei;
font-size: ${convertSize.getWidth(8)}px;
color: ${colors.main};
`;
const CardMiddleRightText = styled.Text`
font-family: Microsoft YaHei;
font-size: ${convertSize.getWidth(12)}px;
color: ${colors.pink};
margin-right: ${convertSize.getWidth(10)}px;
`;
const CardBottomView = styled.View`
width: 100%;
height: ${convertSize.getHeight(20)}px;
background: ${colors.gray};
`;
// 导出
export {
  AppStatusBar,
  TopView,
  SearchView,
  SearchInput,
  CarouselImage,
  CardsView,
  CardFlatListView,
  CardRightView,
  CardLeftView,
  CardTopImage,
  CardMiddleView,
  CardMiddleImage,
  CardMiddleTextView,
  CardMiddleTopText,
  CardMiddleBottomText,
  CardMiddleRightText,
  CardBottomView,
}