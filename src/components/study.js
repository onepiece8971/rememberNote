import React from 'react';
import {
  Text, View
} from 'react-native';

import {Link} from 'react-router-native';

export default Study = () => (
  <View>
    <Link to='/'>
      <Text>goBack</Text>
    </Link>
    <Text style={{fontSize: 20}}>
      Study
    </Text>
  </View>
);