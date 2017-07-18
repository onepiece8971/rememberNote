import React from 'react';
import {
  Text,
} from 'react-native';

export default Remember = ({isOpen}) => (
  <Text style={{fontSize: 20,}}>
    Remember{isOpen}
  </Text>
)