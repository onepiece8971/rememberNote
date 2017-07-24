import styled from 'styled-components/native';
import CS from './convertSize';
import {colors, YaHeiText, SongTiText} from './styles';

const TopView = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
height: ${CS.h(58)}px;
padding: 0 ${CS.w(12)}px;
background: ${colors.main};
`;

const TopText = YaHeiText.extend`
font-size: 24;
color: ${colors.white};
`;

const ContentView = styled.View`
flex: 1;
padding: ${CS.h(20)}px ${CS.w(12)}px;
`;

const RowText = YaHeiText.extend`
font-size: ${props => props.size || 10};
`;

const TextView = styled.View`
flex-direction: row;
align-items: center;
`;

const RememberImage = styled.Image`
width: ${CS.w(100)}px;
height: ${CS.h(100)}px;
border-width: 0;
`;

const OccupiedView = styled.View`
margin: 0;
padding: 0;
height: ${props => CS.h(props.rows * 10 || 10)}px;
`;

const RememberButtonView = styled.View`
width: ${CS.w(133)}px;
height: ${CS.h(96)}px;
justify-content: space-between;
align-self: flex-end;
`;
const RememberTopButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
width: 100%;
height: ${CS.h(40)}px;
background: ${colors.main};
`;
const RememberFootButton = RememberTopButton.extend`
background: ${colors.pink};
`;
const NormalFootButton = RememberTopButton.extend`
width: ${CS.w(132)}px;
align-self: flex-end;
`;
const RememberFootButtonText = SongTiText.extend`
font-size: 20;
`;
const RememberTopButtonText = RememberFootButtonText.extend`
color: ${colors.white};
`;

export {
  TopView,
  TopText,
  ContentView,
  RowText,
  TextView,
  RememberImage,
  OccupiedView,
  RememberButtonView,
  RememberTopButton,
  RememberTopButtonText,
  RememberFootButton,
  NormalFootButton,
  RememberFootButtonText,
}