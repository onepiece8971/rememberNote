import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import {
  BottomNavView,
  BottomNavTopView,
  BottomNavTopSmallView,
  BottomNavFootView,
  BottomNavFootSmallView,
  BottomNavTopText,
  BottomNavMiddleText,
  BottomNavFootText,
} from '../css/styles';
import Svg, {Polygon} from 'react-native-svg';
import CS from '../css/convertSize';

export default Bottom = () => (
  <View>
    <BottomNavView>
      <BottomNavTopView>
        <BottomNavTopSmallView>
          <Svg width={CS.w(25)} height={CS.h(10)} viewBox="0 0 250 100">
            <Polygon id="Triangle" points="125,0 0,100 250,100" fill="#6ABEA7" fillOpacity="0.87"/>
          </Svg>
        </BottomNavTopSmallView>
      </BottomNavTopView>
      <BottomNavFootView>
        <Link to="/" component={TouchableOpacity}>
          <BottomNavFootSmallView>
            <BottomNavTopText>已抄笔记</BottomNavTopText>
            <BottomNavMiddleText>10</BottomNavMiddleText>
            <BottomNavFootText>抄笔记</BottomNavFootText>
          </BottomNavFootSmallView>
        </Link>
        <BottomNavFootSmallView background="#6ABEA7">
          <Svg width={CS.w(22)} height={CS.h(22)} viewBox="9 9 22 22">
            <Polygon points="19 19 19 9 21 9 21 19 31 19 31 21 21 21 21 31 19 31 19 21 9 21 9 19" fill="#fff"
                     fillOpacity="0.87"/>
          </Svg>
        </BottomNavFootSmallView>
        <Link to="/remember" component={TouchableOpacity}>
          <BottomNavFootSmallView>
            <BottomNavTopText>已背笔记</BottomNavTopText>
            <BottomNavMiddleText>10</BottomNavMiddleText>
            <BottomNavFootText>背笔记</BottomNavFootText>
          </BottomNavFootSmallView>
        </Link>
      </BottomNavFootView>
    </BottomNavView>
  </View>
)