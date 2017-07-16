import React from 'react';
import {View, FlatList} from 'react-native';
import {
  AppStatusBar,
  TopView,
  SearchView,
  SearchInput,
  CarouselImage,
  CardsView,
  CardFlatListView,
  CardRightView,
  CardLeftView,
  CardTopImage,
  CardMiddleView,
  CardMiddleImage,
  CardMiddleTextView,
  CardMiddleTopText,
  CardMiddleBottomText,
  CardMiddleRightText,
  CardBottomView,
} from '../css/styles';
import Svg,{Path} from 'react-native-svg';
import convertSize from '../css/convertSize';

export default Home = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({key: i});
  }
  const _renderItem = ({item}) => {
    const uri  = item.key % 2 === 0 ? require('../css/img/top01.png') : require('../css/img/top03.png');
    const uri2 = item.key % 2 === 0 ? require('../css/img/top02.png') : require('../css/img/top04.png');
    return (
      <CardFlatListView>
        <CardLeftView>
          <CardTopImage source={uri}/>
          <CardMiddleView>
            <CardMiddleImage />
            <CardMiddleTextView>
              <CardMiddleTopText>
                日本中产阶级
              </CardMiddleTopText>
              <CardMiddleBottomText>
                用户名
              </CardMiddleBottomText>
            </CardMiddleTextView>
            <CardMiddleRightText>
              ¥36
            </CardMiddleRightText>
          </CardMiddleView>
          <CardBottomView>
          </CardBottomView>
        </CardLeftView>
        <CardRightView>
          <CardTopImage source={uri2}/>
          <CardMiddleView>
            <CardMiddleImage />
            <CardMiddleTextView>
              <CardMiddleTopText>
                日本中产阶级
              </CardMiddleTopText>
              <CardMiddleBottomText>
                用户名
              </CardMiddleBottomText>
            </CardMiddleTextView>
            <CardMiddleRightText>
              ¥36
            </CardMiddleRightText>
          </CardMiddleView>
          <CardBottomView>
          </CardBottomView>
        </CardRightView>
      </CardFlatListView>
    )
  };
  return (
    <View>
      <AppStatusBar />
      <TopView>
        <SearchView>
          <Svg width={convertSize.getWidth(17)} height={convertSize.getHeight(16)} viewBox="5 6 17 16" version="1.1">
            <Path
              d="M15.260009,17.2417667 C14.3334886,17.8143099 13.2415113,18.1447237 12.0723619,18.1447237 C8.71868901,18.1447237 6,15.4260347 6,12.0723619 C6,8.71868901 8.71868901,6 12.0723619,6 C15.4260347,6 18.1447237,8.71868901 18.1447237,12.0723619 C18.1447237,13.2415113 17.8143099,14.3334886 17.2417667,15.260009 L20.9357867,18.954029 C21.3253394,19.3435817 21.3314846,19.9690262 20.9368606,20.3636502 L20.3636502,20.9368606 C19.9746906,21.3258202 19.3397329,21.3214906 18.954029,20.9357867 L15.260009,17.2417667 Z M14.4778201,14.9321448 C13.827821,15.479447 12.9886004,15.8091999 12.0723619,15.8091999 C10.0085632,15.8091999 8.33552379,14.1361605 8.33552379,12.0723619 C8.33552379,10.0085632 10.0085632,8.33552379 12.0723619,8.33552379 C14.1361605,8.33552379 15.8091999,10.0085632 15.8091999,12.0723619 C15.8091999,12.9886004 15.479447,13.827821 14.9321448,14.4778201 L14.4778201,14.9321448 Z"
              id="Spotlight" stroke="none" fill="#5E6973" fillRule="evenodd" fillOpacity="0.87"/>
          </Svg>
          <SearchInput/>
        </SearchView>
      </TopView>
      <CarouselImage />
      <CardsView>
        <FlatList
          data={data}
          renderItem={_renderItem}
          getItemLayout={(data, index) => (
            {length: convertSize.getHeight(160), offset: convertSize.getHeight(160) * index, index}
          )}
        />
      </CardsView>
    </View>
  )
};