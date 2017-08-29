import styled from 'styled-components/native';
import {colors, YaHeiText, XingKaiText} from './styles';
import CS from './convertSize';

const ContentView = styled.View`
flex: 1;
padding: 0 ${CS.w(6)}px;
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
height: ${CS.h(120)}px;
margin: 0 ${CS.w(6)}px;
`;
const DetailsContentView = TopView.extend`
height: ${CS.h(84)}px;
margin: 0 ${CS.w(6)}px;
`;
const SmallView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
height: ${CS.h(80)}px;
`;
const DetailsSmallView = SmallView.extend`
height: ${CS.h(60)}px;
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
font-size: 16;
`;

const MiddleTextView = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
padding: 0;
margin: 0;
`;
const MiddleText = YaHeiText.extend`
font-size: 12;
color: ${colors.gray058};
`;

const FootTextView = styled.View`
flex-direction: row;
padding: 0;
margin: 0;
`;
const FootLeftTex = YaHeiText.extend`
color: ${colors.pink};
`;
const FootRightTex = YaHeiText.extend``;

const RightView = styled.View`
width: ${CS.w(49)}px;
height: 100%;
align-items: flex-end;
justify-content: space-between;
`;
const RightViewForAllNote = styled.View`
width: ${CS.w(12)}px;
height: 100%;
justify-content: flex-start;
`;

const RightViewButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 100%;
height: ${CS.h(22)}px;
background: ${props => props.active ?  colors.main : colors.gray038};
`;
const ButtonText = YaHeiText.extend`
font-size: 12;
color: ${colors.white};
`;

export {
  ContentView,
  TopView,
  TopText,
  SmallContentView,
  DetailsContentView,
  SmallView,
  DetailsSmallView,
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

  RightViewForAllNote,
}