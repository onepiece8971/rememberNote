import React from 'react';
import {FlatList} from 'react-native';
import CS from '../css/convertSize';
import {
  ContentView,
  TopView,
  TopText,
  DetailsContentView,
  DetailsSmallView,
  TextView,
  TitleText,
  MiddleTextView,
  MiddleText,
  FootTextView,
  FootLeftTex,
  FootRightTex,
  RightViewForAllNote
} from '../css/noteStyles';
import Svg, {Polygon} from 'react-native-svg';
import {MainView} from '../css/styles'
import Menu from '../containers/menu'
import Top from '../containers/top';

const DetailsView = ({navigation, item, userBooksId, getPost}) => (
  <DetailsContentView>
    <DetailsSmallView>
      <TextView>
        <TitleText onPress={() => {
          getPost(userBooksId, item.page);
          navigation.navigate('NoteDetails');
        }}>{item.name}</TitleText>
        <MiddleTextView>
          <MiddleText>{item.content}</MiddleText>
        </MiddleTextView>
        <FootTextView>
          <FootLeftTex>熟练度: </FootLeftTex>
          <FootRightTex>{item.level}</FootRightTex>
        </FootTextView>
      </TextView>
      <RightViewComp isMemory={item.level} />
    </DetailsSmallView>
  </DetailsContentView>
);

const RightViewComp = ({isMemory}) => {
  return isMemory ? (
    <RightViewForAllNote>
      <Svg width={CS.w(12)} height={CS.h(16)} viewBox="0 0 9 12">
        <Polygon points="0 0.00184591254 0 11.9664853 4.47141075 7.97608219 8.99312842 11.9949669 8.99312842 0"
                 fill="rgba(252, 200, 194, 0.58)"/>
      </Svg>
    </RightViewForAllNote>
  ) : (
    <RightViewForAllNote>
      <Svg width={CS.w(12)} height={CS.h(16)} viewBox="0 0 14 18">
        <Polygon points="0 0.00246224944 0 15.9620086 5.96643643 10.6392386 12 16 12 0"
                 fill="none" stroke="rgba(94, 105, 115, 0.38)" strokeWidth="2"/>
      </Svg>
    </RightViewForAllNote>
  )
};

const PostMax = 50;

export default NoteDetailsList = ({navigation, posts, userBooksId, userBooksName, getPost, getPosts}) => {
  if (posts) {
    const data = [];
    for (let i in posts) {
      let v = posts[i];
      const content = v.Content.split("\n")[3];
      data.push({
        key:      i,
        id:       v.Id,
        name:     v.Name,
        content:  content.substr(0, 26),
        level:    v.Level,
        page:     v.Page,
      });
    }
    return (
      <Menu>
        <MainView>
          <Top back={true} navigation={navigation} search={{type: 'postsList', data: userBooksId}} />
          <ContentView>
            <TopView>
              <TopText>{userBooksName}</TopText>
            </TopView>
            <FlatList
              data={data}
              renderItem={
                ({item}) => (<DetailsView item={item} userBooksId={userBooksId} getPost={getPost} navigation={navigation} />)
              }
              getItemLayout={(data, index) => (
                {length: CS.h(84), offset: CS.h(84) * index, index}
              )}
              refreshing={true}
              onEndReached={() => getPosts(userBooksId, Math.ceil(Object.keys(posts).length / PostMax) + 1)}
              onEndReachedThreshold={0.2}
            />
          </ContentView>
        </MainView>
      </Menu>
    )
  } else {
    return (
      <TitleText>Loading...</TitleText>
    )
  }
};