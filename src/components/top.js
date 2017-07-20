import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {
  AppStatusBar,
  TopView,
  SearchView,
  SearchInput,
} from '../css/styles';
import Svg, {Path} from 'react-native-svg';
import CS from '../css/convertSize';

export default Top = ({toggle}) => (
  <View>
    <AppStatusBar/>
    <TopView>
      <SearchView>
        <Svg width={CS.w(17)} height={CS.h(16)} viewBox="5 6 17 16" version="1.1">
          <Path
            d="M15.260009,17.2417667 C14.3334886,17.8143099 13.2415113,18.1447237 12.0723619,18.1447237 C8.71868901,18.1447237 6,15.4260347 6,12.0723619 C6,8.71868901 8.71868901,6 12.0723619,6 C15.4260347,6 18.1447237,8.71868901 18.1447237,12.0723619 C18.1447237,13.2415113 17.8143099,14.3334886 17.2417667,15.260009 L20.9357867,18.954029 C21.3253394,19.3435817 21.3314846,19.9690262 20.9368606,20.3636502 L20.3636502,20.9368606 C19.9746906,21.3258202 19.3397329,21.3214906 18.954029,20.9357867 L15.260009,17.2417667 Z M14.4778201,14.9321448 C13.827821,15.479447 12.9886004,15.8091999 12.0723619,15.8091999 C10.0085632,15.8091999 8.33552379,14.1361605 8.33552379,12.0723619 C8.33552379,10.0085632 10.0085632,8.33552379 12.0723619,8.33552379 C14.1361605,8.33552379 15.8091999,10.0085632 15.8091999,12.0723619 C15.8091999,12.9886004 15.479447,13.827821 14.9321448,14.4778201 L14.4778201,14.9321448 Z"
            id="Spotlight" stroke="none" fill="#5E6973" fillRule="evenodd" fillOpacity="0.87"/>
        </Svg>
        <SearchInput/>
      </SearchView>
      <TouchableOpacity onPress={toggle}>
        <Svg width={CS.w(19)} height={CS.h(13)} viewBox="0 0 19 13">
          <Path
            d="M0,0 L19,0 L19,3 L0,3 L0,0 Z M0,5 L19,5 L19,8 L0,8 L0,5 Z M0,10 L19,10 L19,13 L0,13 L0,10 Z"
            fill="#5E6973" fillOpacity="0.87"/>
        </Svg>
      </TouchableOpacity>
    </TopView>
  </View>
)