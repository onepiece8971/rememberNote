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
  CardView,
  CardTopImage,
  CardMiddleView,
  CardMiddleImage,
  CardMiddleTextView,
  CardMiddleTopText,
  CardMiddleBottomText,
  CardMiddleRightText,
  CardBottomView,
  CardBottomText,
  CardBottomIconView
} from '../css/styles';
import Svg,{Path, Polygon} from 'react-native-svg';
import convertSize from '../css/convertSize';

export default Home = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({key: i});
  }
  // 卡片
  const Card = (props) => {
    const _svgHeart = (props) => (
      <Svg width={convertSize.getWidth(props.width || 8)} height={convertSize.getHeight(props.height || 6)} viewBox="10 7 8 6" version="1.1">
        <Path
          d="M13.9871626,13 C13.9871626,13 10.8000696,11.5538694 10.0455622,9.1684641 C9.61072766,7.37746425 12.3916106,5.66654491 13.991359,8.5285689 C15.6409159,5.66654491 18.3128782,7.38283141 17.969958,9.1684641 C17.0770415,11.7697652 13.9871626,13 13.9871626,13 Z"
          stroke="none" fill={props.fill || "#FFFFFF"} fillRule="evenodd" fillOpacity={props.fillOpacity || 1}/>
      </Svg>
    );
    const _svgShopping = (props) => (
      <Svg width={convertSize.getWidth(props.width || 8)} height={convertSize.getHeight(props.height || 8)} viewBox="32 6 8 8">
        <Polygon stroke="none" fill={props.fill || "#FFFFFF"} fillRule="evenodd"
                 points="32 7.34251576 32.0483301 8.08283952 32.7147416 8.05813491 32.6932313 11.3568786 37.2841866 11.3172426 37.3238037 12.6572639 33.3371794 12.6622863 33.37244 13.2904891 34.0340864 13.2850595 33.9837142 14 34.7213275 13.9495049 34.6597916 13.2746076 36.63983 13.3093569 36.6823061 13.9891408 37.3747205 13.9767885 37.3621955 13.272843 38.018124 13.2727072 39.3956712 6.69635962 39.9978957 6.68896641 40 6 38.6384314 6.01918236 38.6503557 7.33477252"/>
      </Svg>
    );
    return (
      <CardView isLeft={props.isLeft}>
        <CardTopImage source={props.uri}/>
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
          <_svgHeart />
          <CardBottomText>
            60
          </CardBottomText>
          <_svgShopping />
          <CardBottomText>
            56
          </CardBottomText>
          <CardBottomIconView>
            <_svgHeart width={convertSize.getWidth(13)} height={convertSize.getHeight(11)} fill="#FCC8C2" fillOpacity={props.fillOpacity} />
            <_svgShopping width={convertSize.getWidth(12)} height={convertSize.getHeight(12)} fill="#FCC8C2" />
          </CardBottomIconView>
        </CardBottomView>
      </CardView>
    )
  };
  // 重复的内容
  const _renderItem = ({item}) => {
    const uri  = item.key % 2 === 0 ? require('../css/img/top01.png') : require('../css/img/top03.png');
    const uri2 = item.key % 2 === 0 ? require('../css/img/top02.png') : require('../css/img/top04.png');
    return (
      <CardFlatListView>
        <Card  isLeft={true} uri={uri} fillOpacity="0.38" />
        <Card  uri={uri2} />
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