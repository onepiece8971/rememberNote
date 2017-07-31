import React from 'react';
import {FlatList} from 'react-native';
import {
  CarouselImage,
  CardsView,
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
} from '../css/homeStyles';
import {OccupiedView} from '../css/studyStyle'
import {Div} from '../css/styles'
import {BottomTag} from '../components/bottom';
import Svg, {Path, Polygon} from 'react-native-svg';
import CS from '../css/convertSize';

export default Home = ({books}) => {
  const data = [];
  books.map(function(v, i){
    data.push({key: i, bookName: v.BookName, cover: v.Cover, userName: v.UserName, head: v.Head})
  });
  const _svgHeart = (props) => (
    <Svg width={CS.w(props.width || 8)} height={CS.h(props.height || 6)} viewBox="10 7 8 6" version="1.1">
      <Path
        d="M13.9871626,13 C13.9871626,13 10.8000696,11.5538694 10.0455622,9.1684641 C9.61072766,7.37746425 12.3916106,5.66654491 13.991359,8.5285689 C15.6409159,5.66654491 18.3128782,7.38283141 17.969958,9.1684641 C17.0770415,11.7697652 13.9871626,13 13.9871626,13 Z"
        stroke="none" fill={props.fill || "#FFFFFF"} fillRule="evenodd" fillOpacity={props.fillOpacity || 1}/>
    </Svg>
  );
  const _svgShopping = (props) => (
    <Svg width={CS.w(props.width || 8)} height={CS.h(props.height || 8)} viewBox="32 6 8 8">
      <Polygon stroke="none" fill={props.fill || "#FFFFFF"} fillRule="evenodd"
               points="32 7.34251576 32.0483301 8.08283952 32.7147416 8.05813491 32.6932313 11.3568786 37.2841866 11.3172426 37.3238037 12.6572639 33.3371794 12.6622863 33.37244 13.2904891 34.0340864 13.2850595 33.9837142 14 34.7213275 13.9495049 34.6597916 13.2746076 36.63983 13.3093569 36.6823061 13.9891408 37.3747205 13.9767885 37.3621955 13.272843 38.018124 13.2727072 39.3956712 6.69635962 39.9978957 6.68896641 40 6 38.6384314 6.01918236 38.6503557 7.33477252"/>
    </Svg>
  );
  // 卡片
  const _renderItem = ({item}) => {
    return (
      <CardView>
        <CardTopImage source={{uri: item.cover}}/>
        <CardMiddleView>
          <CardMiddleImage source={{uri: item.head}} />
          <CardMiddleTextView>
            <CardMiddleTopText>
              {item.bookName}
            </CardMiddleTopText>
            <CardMiddleBottomText>
              {item.userName}
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
            <_svgHeart width={CS.w(13)} height={CS.h(11)} fill="#FCC8C2" fillOpacity={0.38} />
            <_svgShopping width={CS.w(12)} height={CS.h(12)} fill="#FCC8C2" />
          </CardBottomIconView>
        </CardBottomView>
      </CardView>
    )
  };
  return (
    <Div>
      <CarouselImage />
      <CardsView>
        <FlatList
          data={data}
          renderItem={_renderItem}
          getItemLayout={(data, index) => (
            {length: CS.h(160), offset: CS.h(170) * index, index}
          )}
          numColumns="2"
          ItemSeparatorComponent={OccupiedView}
        />
      </CardsView>
      <BottomTag />
    </Div>
  )
};