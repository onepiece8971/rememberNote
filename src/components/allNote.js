import React from 'react';
import {FlatList} from 'react-native';
import CS from '../css/convertSize';
import {
  ContentView,
  TopView,
  TopText,
} from '../css/noteStyles';
import {MainView} from '../css/styles'
import Menu from '../containers/menu'
import Top from '../containers/top';
import SmallNoteViews from '../components/smallNoteViews';

export default AllNote = () => {
  const data = [];
  for (let i = 0; i < 6; i++) {
    let all = i % 2 === 0;
    data.push({key: i, all: all});
  }

  return (
    <Menu>
      <MainView>
        <Top />
        <ContentView>
          <TopView>
            <TopText>所有笔记</TopText>
          </TopView>
          <FlatList
            data={data}
            renderItem={SmallNoteViews}
            getItemLayout={(data, index) => (
              {length: CS.h(120), offset: CS.h(120) * index, index}
            )}
          />
        </ContentView>
      </MainView>
    </Menu>
  )
};