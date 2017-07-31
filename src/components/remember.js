import React from 'react';
import {View, FlatList} from 'react-native';
import CS from '../css/convertSize';
import {
  ContentView,
  TopView,
  TopText,
} from '../css/noteStyles';
import SmallNoteViews from '../components/smallNoteViews';
import {BottomTag} from '../components/bottom';

export default Remember = ({userBooks}) => {
  const data = [];
  userBooks.map(function(v, i){
    data.push({
      key:       i,
      name:      v.Name,
      cover:     v.Cover,
      info:      v.Info,
      usedPages: v.UsedPages,
      pageNum:   v.PageNum,
      isMemory:  v.IsMemory && true,
    });
  });
  return (
    <View style={{flex: 1}}>
      <ContentView>
        <TopView>
          <TopText>背笔记</TopText>
        </TopView>
        <FlatList
          data={data}
          renderItem={SmallNoteViews}
          getItemLayout={(data, index) => (
            {length: CS.h(120), offset: CS.h(120) * index, index}
          )}
        />
      </ContentView>
      <BottomTag isRight={true} />
    </View>
  )
};