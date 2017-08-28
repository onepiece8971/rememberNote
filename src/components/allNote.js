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
import SmallNoteViews from '../containers/smallNoteViews';

export default AllNote = ({navigation, userBooks}) => {
  const data = [];
  for (let i in userBooks) {
    let v = userBooks[i];
    data.push({
      key:       i,
      id:        v.Id,
      name:      v.Name,
      cover:     v.Cover,
      info:      v.Info,
      usedPages: v.UsedPages,
      pageNum:   v.PageNum,
      isMemory:  v.IsMemory && true,
    });
  }
  return (
    <Menu navigation={navigation}>
      <MainView>
        <Top />
        <ContentView>
          <TopView>
            <TopText>所有笔记</TopText>
          </TopView>
          <FlatList
            data={data}
            renderItem={({item}) => (<SmallNoteViews item={item} navigation={navigation} />)}
            getItemLayout={(data, index) => (
              {length: CS.h(120), offset: CS.h(120) * index, index}
            )}
          />
        </ContentView>
      </MainView>
    </Menu>
  )
};