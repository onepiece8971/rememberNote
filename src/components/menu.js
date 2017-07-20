import React from 'react';
import {
  MenuView,
  MenuTopView,
  MenuHeadImage,
  MenuUserName,
  MenuListView,
  MenuListText,
  MenuFootView,
  MenuFootText
} from '../css/menuStyles';
import Svg, {Path} from 'react-native-svg';
import CS from '../css/convertSize';

export default Menu = ({rootLink, mainLink}) => (
  <MenuView>
    <MenuTopView>
      <MenuHeadImage />
      <MenuUserName>用户名</MenuUserName>
    </MenuTopView>
    <MenuListView>
      <MenuListText onPress={() => mainLink('/')}>所有笔记</MenuListText>
      <MenuListText onPress={() => mainLink('/remember')}>记忆笔记</MenuListText>
      <MenuListText onPress={() => rootLink('/counter')}>已分享</MenuListText>
      <MenuListText>标签</MenuListText>
      <MenuListText>废纸篓</MenuListText>
    </MenuListView>
    <MenuFootView>
      <MenuFootText>
        上次同步时间: 2017年7月19日 22:00
      </MenuFootText>
      <Svg width={CS.w(18.2)} height={CS.h(20.31)} viewBox="0 0 100.393 112">
        <Path d="M11.708,58.482L0.108,59.244C-1.395,36.116,13.001,15.112,35.103,8.13c12.955-4.083,26.977-2.669,38.891,3.766L85.13,0
        l2.969,33.012l-34.967,1.167l12.575-13.436c-8.518-3.752-18.148-4.345-27.099-1.507C21.603,24.589,10.561,40.721,11.708,58.482z
         M100.281,52.761l-11.604,0.761c1.162,17.724-9.894,33.876-26.896,39.242c-8.95,2.824-18.582,2.236-27.084-1.503l12.567-13.448
        l-34.948,1.177L15.279,112l11.159-11.915c7.382,3.967,15.558,6.095,23.795,6.095c5.052,0,10.145-0.779,15.044-2.312
        C87.411,96.871,101.808,75.855,100.281,52.761z" fill="#5E6973" fillOpacity={0.87} />
      </Svg>
    </MenuFootView>
  </MenuView>
);