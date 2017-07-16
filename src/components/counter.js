import React, {Component} from 'react';
import {Text} from 'react-native';
import Button from 'react-native-button';
import styled from 'styled-components/native';

const Test = styled.View`
flex:1;
align-items:center;
justify-content:center;
`;

const button = {"width":100,"height":30,"padding":10,"alignItems":"center","justifyContent":"center","margin":3};
const CounterButton = styled(Button).attrs({
  containerStyle: props => {
    button.backgroundColor = props.backgroundColor || 'yellow';
    return button
  },
})`
font-size: 20px;
color: green;
`;

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <Test>
        <Text>{counter}</Text>
        <CounterButton onPress={increment}>
          up
        </CounterButton>
        <CounterButton onPress={decrement} backgroundColor="#00d1b2">
          down
        </CounterButton>
      </Test>
    );
  }
}
