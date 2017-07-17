import React from 'react';
import styled from 'styled-components/native';
import CS from './convertSize';
import {colors} from './styles';

// 顶部搜索框
const TopView = styled.View`
height: ${CS.h(74)}px;
background: ${colors.main};
padding: 0 ${CS.w(12)}px;
justify-content: center;
`;
const SearchView = styled.View`
width: ${CS.w(320)}px;
height: ${CS.h(28)}px;
background: #fff;
flex-direction: row;
align-items: center;
padding-left: ${CS.w(6)}px;
`;
const SearchInput = styled.TextInput.attrs({
  underlineColorAndroid: "transparent"
})`
flex: 1;
padding: 0;
margin-left: ${CS.w(6)}px;
`;

// 轮播图
const CarouselImage = styled.Image.attrs({
  source : require('./img/carouse.jpg'),
})`
width: 100%;
height: ${CS.h(160)}px;
`;

// 卡片集
const CardsView = styled.View`
width: 100%;
height: ${CS.h(330)}px;
padding: 0 ${CS.w(12)}px;
margin-top: ${CS.h(10)}px;
`;
const CardFlatListView = styled.View`
flex-flow: row wrap;
`;
const CardView = styled.View`
width: ${CS.w(170)}px;
height: ${CS.h(160)}px;
margin-bottom: ${CS.h(10)}px;
margin-right: ${props => props.isLeft ? CS.w(11) : 0}px;
`;
const CardTopImage = styled.Image`
width: 100%;
height: ${CS.h(110)}px;
`;
const CardMiddleView = styled.View`
width: 100%;
height: ${CS.h(30)}px;
flex-direction: row;
align-items: center;
`;
const CardMiddleImage = styled.Image.attrs({
  source : require('./img/head.jpg'),
})`
width: ${CS.w(20)}px;
height: ${CS.h(20)}px;
border-radius: ${CS.w(20)}px;
margin: 0 ${CS.w(10)}px;
`;
const CardMiddleTextView = styled.View`
width: ${CS.w(14)}px;
height: 100%;
flex:1;
justify-content: center;
`;
const CardMiddleTopText = styled.Text`
font-family: Microsoft-YaHei;
font-size: ${CS.w(10)}px;
color: ${colors.gray};
`;
const CardMiddleBottomText = styled.Text`
font-family: Microsoft-YaHei;
font-size: ${CS.w(8)}px;
color: ${colors.main};
`;
const CardMiddleRightText = styled.Text`
font-family: Microsoft-YaHei;
font-size: ${CS.w(12)}px;
color: ${colors.pink};
margin-right: ${CS.w(10)}px;
`;
const CardBottomView = styled.View`
width: 100%;
height: ${CS.h(20)}px;
background: ${colors.gray};
padding: 0 ${CS.w(10)}px;
flex-direction: row;
align-items: center;
`;
const CardBottomText = styled.Text`
font-family: Microsoft-YaHei;
font-size: ${CS.w(8)}px;
color: ${colors.white};
margin: 0 ${CS.w(2)}px;
`;
const CardBottomIconView = styled.View`
width: ${CS.w(35)}px;
margin-left: ${CS.w(72)}px;
flex-direction: row;
justify-content: space-between;
`;

// 导出
export {
  TopView,
  SearchView,
  SearchInput,
  CarouselImage,

  CardsView,
  CardFlatListView,
  CardView,
  CardTopImage,
  CardMiddleView,
  CardMiddleImage,
  CardMiddleTextView,
  CardMiddleTopText,
  CardMiddleBottomText,
  CardMiddleRightText,
  CardBottomView,
  CardBottomText,
  CardBottomIconView,
}