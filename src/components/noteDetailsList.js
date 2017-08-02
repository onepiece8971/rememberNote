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
import {Link} from 'react-router-native';

const DetailsView = ({item}) => (
  <DetailsContentView>
    <DetailsSmallView>
      <TextView>
        <Link to={"/noteDetails/" + item.id}>
          <TitleText>{item.name}</TitleText>
        </Link>
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

export default NoteDetailsList = ({posts, userBooksName}) => {
  if (posts) {
    const data = [];
    posts.map(function(v, i) {
      data.push({
        key:     i,
        id:      v.Id,
        name:    v.Name,
        content: v.Content,
        level:   v.Level,
      });
    });
    return (
      <Menu>
        <MainView>
          <Top back={true} />
          <ContentView>
            <TopView>
              <TopText>{userBooksName}</TopText>
            </TopView>
            <FlatList
              data={data}
              renderItem={DetailsView}
              getItemLayout={(data, index) => (
                {length: CS.h(120), offset: CS.h(120) * index, index}
              )}
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