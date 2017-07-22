import styled from 'styled-components/native';
import CS from './convertSize';

// 颜色集合
const colors = {
  main: 'rgba(106, 190, 167, 0.87)',
  gray: 'rgba(94, 105, 115, 0.87)',
  gray058: 'rgba(94, 105, 115, 0.58)',
  gray038: 'rgba(94, 105, 115, 0.38)',
  pink: 'rgba(252, 200, 194, 0.87)',
  white: 'rgba(255, 255, 255, 0.87)',
  white058: 'rgba(255, 255, 255, 0.58)',
  white038: 'rgba(255, 255, 255, 0.38)',
};

// 透明度
// const opacitys = {main: 0.87};

// 字体
const fonts = {
  yaHei: 'Microsoft-YaHei',
  xingKai: 'Xingkai-SC-Bold',
  songTi: 'SongTi-SC',
};
const YaHeiText = styled.Text`
font-family: ${fonts.yaHei};
font-size: 10px;
color: ${colors.gray};
`;
const XingKaiText = YaHeiText.extend`
font-family: ${fonts.xingKai};
`;
const SongTiText = YaHeiText.extend`
font-family: ${fonts.songTi};
`;

/* 组件 */
// 状态栏
const AppStatusBar = styled.StatusBar.attrs({
  backgroundColor: colors.main
})``;

// 导航页View
const MainView = styled.View`
height: ${CS.getWindowsHeight()}px;
background: #fff;
`;
const OccupiedView = styled.View`
flex:1;
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
const BottomNavTopView = styled.View`
width: 100%;
height: ${CS.h(10)}px;
flex-direction: row;
justify-content: ${props => props.isRight ? 'flex-end' : 'flex-start'};
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
const BottomNavTopText = XingKaiText.extend`
color: ${colors.white038};
`;
const BottomNavMiddleText = SongTiText.extend`
font-size: 18px;
color: ${colors.white058};
line-height: 13;
`;
const BottomNavFootText = SongTiText.extend`
font-size: 12px;
color: ${colors.white};
`;

// 导出
export {
  colors,
  AppStatusBar,

  YaHeiText,
  XingKaiText,
  SongTiText,

  TopView,
  SearchView,
  SearchInput,

  MainView,
  OccupiedView,

  BottomNavTopView,
  BottomNavTopSmallView,
  BottomNavFootView,
  BottomNavFootSmallView,
  BottomNavTopText,
  BottomNavMiddleText,
  BottomNavFootText,
}