import React, {Component} from 'react';
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
import {globalNavigation} from './main';

export default SmallNoteViews = ({item, getUserBooksId, getPostsInit, ...rest}) => (
  <SmallContentView>
    <SmallView>
      <CoverImage source={{uri: item.cover}} />
      <TextView>
        <TitleText onPress={() => {
          getUserBooksId(item.id);
          // 初始化posts数据
          getPostsInit(item.id, 1);
          globalNavigation.navigate('NoteDetailsList');
        }}>{item.name}</TitleText>
        <MiddleTextView>
          <MiddleText>{item.info}</MiddleText>
        </MiddleTextView>
        <FootTextViewComp isMemory={item.isMemory} usedPages={item.usedPages} pageNum={item.pageNum}/>
      </TextView>
      <RightViewComp isMemory={item.isMemory} getUserBooksId={getUserBooksId} userBooksId={item.id} {...rest} />
    </SmallView>
  </SmallContentView>
);

class RightViewComp extends Component {
  state = {
    active: false
  };

  pingReview = async () => {
    const {userBooksId, getUserBooksId, review} = this.props;
    getUserBooksId(userBooksId);
    const json = await review(userBooksId);
    return json.payload.length > 0;
  };

  async componentWillMount() {
    this.setState({
      active: await this.pingReview(),
    });
  }
  render() {
    const {isMemory, getPointPost} = this.props;
    return isMemory ? (
      <RightView>
        <Svg width={CS.w(12)} height={CS.h(16)} viewBox="0 0 9 12">
          <Polygon points="0 0.00184591254 0 11.9664853 4.47141075 7.97608219 8.99312842 11.9949669 8.99312842 0"
                   fill="rgba(252, 200, 194, 0.58)"/>
        </Svg>
        <RightViewButton active={this.state.active} onPress={async () => {
          if (this.state.active) {
            getPointPost();
            globalNavigation.navigate('NoteDetails', {review: true});
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
  }
}

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