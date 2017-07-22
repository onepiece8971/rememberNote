import React from 'react';
import {View, FlatList} from 'react-native';
import CS from '../css/convertSize';
import Svg, {Polygon} from 'react-native-svg';
import {
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
  ButtonText
} from '../css/noteStyles';
import {BottomTag} from '../components/bottom';

export default Remember = () => {
  const data = [];
  for (let i = 0; i < 6; i++) {
    data.push({key: i});
  }

  const _smallView = ({item}) => (
    <SmallContentView>
      <SmallView>
        <CoverImage source={require('../css/img/cover02.png')} />
        <TextView>
          <TitleText>XX笔记本</TitleText>
          <MiddleTextView>
            <MiddleText>笔记本描述,这是一本xxx笔记本,描述要够记录着你懂得一些东西. </MiddleText>
          </MiddleTextView>
          <FootTextView>
            <FootLeftTex>100</FootLeftTex>
            <FootRightTex>/1000</FootRightTex>
          </FootTextView>
        </TextView>
        <RightView>
          <Svg width={CS.w(9)} height={CS.h(12)} viewBox="0 0 9 12">
            <Polygon points="0 0.00184591254 0 11.9664853 4.47141075 7.97608219 8.99312842 11.9949669 8.99312842 0"
                     fill="rgba(252, 200, 194, 0.58)"/>
          </Svg>
          <RightViewButton>
            <ButtonText>复习</ButtonText>
          </RightViewButton>
        </RightView>
      </SmallView>
    </SmallContentView>
  );

  return (
    <View style={{flex: 1}}>
      <ContentView>
        <TopView>
          <TopText>背笔记</TopText>
        </TopView>
        <FlatList
          data={data}
          renderItem={_smallView}
          getItemLayout={(data, index) => (
            {length: CS.h(92), offset: CS.h(92) * index, index}
          )}
        />
      </ContentView>
      <BottomTag isRight={true} />
    </View>
  )
};