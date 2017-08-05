import React, {Component} from 'react';
import {View, Text} from 'react-native';

const styles = {
  heading1: {
    fontSize: 32
  },
  heading2: {
    fontSize: 24
  },
  heading3: {
    fontSize: 18
  },
  heading4: {
    fontSize: 16
  },
  heading5: {
    fontSize: 13
  },
  heading6: {
    fontSize: 11
  },
  interval: 10
};

const defaultRules = (styles = Styles) => ({
  '#': (re, key) => {
    const head = {level: re[1].length, content: re[2]};
    return React.createElement(
      Text,
      {key: key, style: styles['heading' + head.level]},
      head.content
    );
  },
  text: (text, key) => {
    return React.createElement(
      Text,
      {key: key, style: {fontSize: 14}},
      text
    );
  },
  interval: (n, key) => {
    if (!n) {
      return null;
    }
    return React.createElement(
      View,
      {key: 'interval' + key, style: {margin: 0, padding: 0, height: styles.interval * n}},
    );
  }
});

const translate = (context, rules) => {
  let results = [];
  const regex  = [
    {type: '#', reg: /^\s*(#{1,6})\s*(.*)/}, //head
  ];
  // get \n counts
  const nArray = context.match(/\n+/g);
  let countN = [];
  if (nArray) {
    nArray.map(function(v, i) {
      countN[i] = v.length;
    });
  }
  const contextArray = context.split(/\n+/);
  contextArray.map(function(text, i) {
    regex.map(function(reg) {
      let re = text.match(reg.reg);
      if (re) {
        results[i] = {element: rules[reg.type](re, i), interval: rules['interval'](countN[i] || 0, i)};
        return true;
      }
    });
    if (!results[i]) {
      results[i] = {element: rules['text'](text, i), interval: rules['interval'](countN[i] || 0, i)};
    }
  });
  return results;
};

export default class MarkDown extends Component {
  static Styles = styles;
  static DefaultRules = defaultRules;
  render() {
    let child = this.props.children || '';
    child = Array.isArray(child)
      ? child.join('') : child;
    const results = translate(child, MarkDown.DefaultRules(MarkDown.Styles));
    let mapArray = [];
    results.map(function(v){
      mapArray.push(v.element, v.interval);
    });
    return <View>{mapArray}</View>
  }
}

