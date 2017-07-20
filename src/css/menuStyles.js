/**
 * 右侧滑动菜单
 */
import styled from 'styled-components/native';
import {colors, YaHeiText, SongTiText} from './styles';
import CS from './convertSize';

const MenuView = styled.View`
height: 100%;
backgroundColor: ${colors.white};
`;

const MenuTopView = styled.View`
padding-right: ${CS.w(12)}px;
background: ${colors.main};
width: 100%;
height: ${CS.h(74)}px;
align-items: flex-end;
`;

const MenuHeadImage = styled.Image.attrs({
  source : require('./img/head.jpg'),
})`
width: ${CS.w(40)}px;
height: ${CS.h(40)}px;
border-radius: ${CS.w(20)}px;
margin: ${CS.h(6)}px 0;
`;

const MenuUserName = YaHeiText.extend`
font-size: 14px;
color: ${colors.white};
`;

const MenuListView = styled.ScrollView.attrs({
  scrollsToTop: false,
  contentContainerStyle: {alignItems: 'flex-end'}
})`
flex:1;
padding-right: ${CS.w(12)}px;
`;

const MenuListText = SongTiText.extend`
margin-top: ${CS.h(30)}px;
font-size: 24px;
`;

const MenuFootView = styled.View`
height: ${CS.h(30)}px;
padding-right: ${CS.w(12)}px;
border-top-width: 1px;
border-style: solid;
border-top-color: ${colors.gray038};
flex-direction: row;
justify-content: flex-end;
align-items: center;
`;

const MenuFootText = YaHeiText.extend`
font-size: 12px;
margin-right: ${CS.w(12)}px;
`;

export {
  MenuView,
  MenuTopView,
  MenuHeadImage,
  MenuUserName,
  MenuListView,
  MenuListText,
  MenuFootView,
  MenuFootText
}