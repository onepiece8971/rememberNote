import React from 'react';
import CS from '../css/convertSize';
import Svg, {Polygon} from 'react-native-svg';
import {
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
  RightViewForAllNote,
  RightViewButton,
  ButtonText,
  RightView
} from '../css/noteStyles';
import {history} from '../components/routerRoot';

export default SmallNoteViews = ({item}) => (
  <SmallContentView>
    <SmallView>
      <CoverImage source={require('../css/img/cover01.png')} />
      <TextView>
        <TitleText onPress={() => {history.push('/noteDetailsList')}}>XX笔记本</TitleText>
        <MiddleTextView>
          <MiddleText>笔记本描述,这是一本xxx笔记本,描述要够记录着你懂得一些东西.</MiddleText>
        </MiddleTextView>
        <FootTextViewComp all={item.all} />
      </TextView>
      <RightViewComp all={item.all} />
    </SmallView>
  </SmallContentView>
);

const RightViewComp = ({all}) => {
  return all ? (
    <RightViewForAllNote>
      <Svg width={CS.w(12)} height={CS.h(16)} viewBox="0 0 9 12">
        <Polygon points="0 0.00184591254 0 11.9664853 4.47141075 7.97608219 8.99312842 11.9949669 8.99312842 0"
                 fill="rgba(94, 105, 115, 0.38)"/>
      </Svg>
    </RightViewForAllNote>
  ) : (
    <RightView>
      <Svg width={CS.w(12)} height={CS.h(16)} viewBox="0 0 9 12">
        <Polygon points="0 0.00184591254 0 11.9664853 4.47141075 7.97608219 8.99312842 11.9949669 8.99312842 0"
                 fill="rgba(252, 200, 194, 0.58)"/>
      </Svg>
      <RightViewButton onPress={() => {history.push('/memoryNoteDetails')}}>
        <ButtonText>复习</ButtonText>
      </RightViewButton>
    </RightView>
  )
};

const FootTextViewComp = ({all}) => {
  return all ? (
    <FootTextView>
      <FootRightTex>共100页</FootRightTex>
    </FootTextView>
  ) : (
    <FootTextView>
      <FootLeftTex>100</FootLeftTex>
      <FootRightTex>/1000页</FootRightTex>
    </FootTextView>
  )
};