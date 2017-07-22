import styled from 'styled-components/native';
import {colors, YaHeiText, XingKaiText} from './styles';
import CS from './convertSize';

const ContentView = styled.View`
flex: 1;
padding: 0 ${CS.w(12)}px;
`;

const TopView = styled.View`
justify-content: center;
border-bottom-width: 1px;
border-style: solid;
border-bottom-color: ${colors.gray038};
height: ${CS.h(22)}px;
`;
const TopText = XingKaiText.extend`
font-size:14;
`;

const SmallContentView = TopView.extend`
height: ${CS.h(92)}px;
`;
const SmallView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
height: ${CS.h(61)}px;
`;

const  CoverImage = styled.Image`
width: ${CS.w(60)}px;
height: 100%;
`;

const TextView = styled.View`
flex: 1;
margin: 0 ${CS.w(12)}px;
`;

const TitleText = YaHeiText.extend`
font-size: 14;
`;

const MiddleTextView = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
padding: 0;
margin: 0;
`;
const MiddleText = YaHeiText.extend`
color: ${colors.gray058};
`;

const FootTextView = styled.View`
flex-direction: row;
padding: 0;
margin: 0;
`;
const FootLeftTex = YaHeiText.extend`
font-size: 8;
color: ${colors.pink};
`;
const FootRightTex = YaHeiText.extend`
font-size: 8;
`;

const RightView = styled.View`
width: ${CS.w(42)}px;
height: 100%;
align-items: flex-end;
justify-content: space-between;
`;

const RightViewButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 100%;
height: ${CS.h(19)}px;
background: ${colors.gray038};
`;
const ButtonText = YaHeiText.extend`
color: ${colors.white};
`;

export {
  ContentView,
  TopView,
  TopText,
  SmallContentView,
  SmallView,
  CoverImage,
  TextView,
  TitleText,
  MiddleTextView,
  MiddleText,
  FootTextView,
  FootLeftTex,
  FootRightTex,
  RightView,
  RightViewButton,
  ButtonText,
}