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

export default SmallNoteViews = ({item, getUserBooksId, ...rest}) => (
  <SmallContentView>
    <SmallView>
      <CoverImage source={{uri: item.cover}} />
      <TextView>
        <TitleText onPress={() => {
          getUserBooksId(item.id);
          history.push('/noteDetailsList/' + item.id);
        }}>{item.name}</TitleText>
        <MiddleTextView>
          <MiddleText>{item.info}</MiddleText>
        </MiddleTextView>
        <FootTextViewComp isMemory={item.isMemory} usedPages={item.usedPages} pageNum={item.pageNum}/>
      </TextView>
      <RightViewComp isMemory={item.isMemory} userBooksId={item.id} {...rest} />
    </SmallView>
  </SmallContentView>
);

const RightViewComp = ({isMemory, userBooksId, review, getPointPost}) => {
  return isMemory ? (
    <RightView>
      <Svg width={CS.w(12)} height={CS.h(16)} viewBox="0 0 9 12">
        <Polygon points="0 0.00184591254 0 11.9664853 4.47141075 7.97608219 8.99312842 11.9949669 8.99312842 0"
                 fill="rgba(252, 200, 194, 0.58)"/>
      </Svg>
      <RightViewButton onPress={async () => {
        const json = await review(userBooksId);
        if (json.payload.length > 0) {
          getPointPost();
          history.push('/noteDetails/review')
        }
      }}>
        <ButtonText>复习</ButtonText>
      </RightViewButton>
    </RightView>
  ) : (
    <RightViewForAllNote>
      <Svg width={CS.w(12)} height={CS.h(16)} viewBox="0 0 9 12">
        <Polygon points="0 0.00184591254 0 11.9664853 4.47141075 7.97608219 8.99312842 11.9949669 8.99312842 0"
                 fill="rgba(94, 105, 115, 0.38)"/>
      </Svg>
    </RightViewForAllNote>
  )
};

const FootTextViewComp = ({isMemory, usedPages, pageNum}) => {
  return isMemory ? (
    <FootTextView>
      <FootLeftTex>{usedPages}</FootLeftTex>
      <FootRightTex>/{pageNum}页</FootRightTex>
    </FootTextView>
  ) : (
    <FootTextView>
      <FootRightTex>共{pageNum}页</FootRightTex>
    </FootTextView>
  )
};