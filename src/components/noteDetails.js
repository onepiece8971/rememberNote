import React, {Component} from 'react';
import {TouchableOpacity, PanResponder, ToastAndroid} from 'react-native';
import CS from '../css/convertSize';
import Svg, {Path} from 'react-native-svg';

import {
  AppStatusBar,
  MainView,
} from '../css/styles';
import {
  TopView,
  TopText,
  ContentView,
  RememberButtonView,
  RememberTopButton,
  NormalFootButton,
  RememberTopButtonText,
  RememberFootButton,
  RememberFootButtonText,
} from '../css/studyStyle';

import MarkDown from '../../plugs/parse-markdown'

export default class NoteDetails extends Component {

  _panResponder = {};

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder.bind(this),
      onPanResponderRelease:       this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate:     this._handlePanResponderEnd.bind(this),
    });
  };

  _handleMoveShouldSetPanResponder(e, gestureState) {
    const {navigation} = this.props;
    const {review} = navigation.state.params || {review: false};
    const x        = gestureState.dx;
    const y        = gestureState.dy;
    return !review && x !== 0 && y !== 0;
  };

  async _handlePanResponderEnd(e, gestureState) {
    const {getPost, ubId, post} = this.props;
    let ok = '';
    if (gestureState.dx < -60) {
      // 下一个
      ok = await getPost(ubId, post.Page + 1);
    } else if (gestureState.dx > 60) {
      ok = await getPost(ubId, post.Page - 1)
    }
    if (ok === 'error') {
      ToastAndroid.show('request timeout', ToastAndroid.SHORT);
    }
  };

  render() {
    const {navigation, post, ...rest} = this.props;
    const {review} = navigation.state.params || {review: false};
    return (
      <MainView>
        <AppStatusBar/>
        <TopView>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Svg width={CS.w(12)} height={CS.h(20)} viewBox="0 0 10 16">
              <Path
                d="M0,8 C0,7.71323323 0.109520046,7.42646645 0.327917163,7.20785501 L7.20774785,0.328238651 C7.64539938,-0.109412884 8.35481494,-0.109412884 8.79225215,0.328238651 C9.22968936,0.76567586 9.22968936,1.47509142 8.79225215,1.91274296 L2.70478079,8 L8.79203783,14.087257 C9.22947504,14.5246943 9.22947504,15.2343241 8.79203783,15.6717613 C8.35460062,16.1094129 7.64518506,16.1094129 7.20753352,15.6717613 L0.327702838,8.79214499 C0.109305721,8.57353355 0,8.28676677 0,8 Z"
                fill="rgba(255, 255, 255, 0.87)"/>
            </Svg>
          </TouchableOpacity>
          <TopText>{review ? '背笔记' : '查看笔记'}</TopText>
        </TopView>
        <ContentView>
          <MarkDown {...this._panResponder.panHandlers} hide={review}>{post.Content}</MarkDown>
          <RememberButton review={review} post={post} navigation={navigation} {...rest} />
        </ContentView>
      </MainView>
    )
  }
};

const RememberButton = ({navigation, review, post, upLevel, addPoint, getPointPost, ...rest}) => {
  const upLevelAndNext = async (isForget) => {
    await upLevel(post.ReciteId, isForget);
    await addPoint();
    const over = await getPointPost();
    if (over) {
      navigation.goBack();
    }
  };
  if (review) {
    return post.Level ? (
      <RememberButtonView>
        <RememberTopButton onPress={() => upLevelAndNext(false)}>
          <RememberTopButtonText>记得</RememberTopButtonText>
        </RememberTopButton>
        <RememberFootButton onPress={() => upLevelAndNext(true)}>
          <RememberFootButtonText>忘记</RememberFootButtonText>
        </RememberFootButton>
      </RememberButtonView>
    ) : (
      <AddReciteView post={post} {...rest} />
    )
  } else {
    return post.Level ? null : (
      <AddReciteView post={post} {...rest} />
    )
  }
};

const AddReciteView = ({post, addRecite, ubId, getPost}) => (
  <NormalFootButton onPress={async () => {
    const success = await addRecite(ubId, post.Id);
    if (success.payload) {
      getPost(ubId, post.Page + 1)
    }
  }}>
    <RememberTopButtonText>加入记忆</RememberTopButtonText>
  </NormalFootButton>
);