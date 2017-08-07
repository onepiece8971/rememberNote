import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

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
  '#': ({type, children}, key) => {
    return React.createElement(
      Text,
      {key: key, style: styles['heading' + type.length]},
      children
    );
  },
  hide: (content, key, state) => {
    return React.createElement(
      Hide,
      {key: key, isHide: state.isHide},
      content
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
  },
});

const translate = (context, rules, state) => {
  let results = [];
  const regex = [
    {type: '#', reg: /^\s*(#{1,6})\s*(.*)/}, //head
  ];
  const childRegex = [
    {type: 'hide', reg: /<hide>(.*)<\/hide>/g},
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

  const parseChildrenRegex = (str) => {
    let line = [];
    childRegex.map(function(cr, lineKey) {
      let mat;
      let lastIndex = 0;
      while (mat = cr.reg.exec(str)) {
        let oneStr = str.slice(lastIndex, mat.index);
        let parseResult = parseChildrenRegex(oneStr);
        line.push(...parseResult);
        line.push(rules[cr.type](mat[1], i + '-' + lineKey, state));
        lastIndex = cr.reg.lastIndex;
      }
    });
    return line;
  };

  contextArray.map(function(text, i) {
    regex.map(function(reg) {
      let re = text.match(reg.reg);
      if (re) {
        extracted(re, reg, i);
        results[i] = {element: rules[reg.type]({type: re[1], children: line}, i, state), interval: rules['interval'](countN[i] || 0, i)};
        return true;
      }
    });
    if (!results[i]) {
      results[i] = {element: rules['text'](text, i), interval: rules['interval'](countN[i] || 0, i)};
    }
  });
  return results;
};

const Hide = ({isHide, children}) => {
  return isHide ? null : <Text>{children}</Text>
};

export default class MarkDown extends Component {
  static Styles = styles;
  static DefaultRules = defaultRules;
  constructor() {
    super();
    this.state = {isHide: false};
  }
  toggle = () => {
    this.setState({
      isHide: !this.state.isHide,
    });
  };
  render() {
    let child = this.props.children || '';
    child = Array.isArray(child)
      ? child.join('') : child;
    const results = translate(child, MarkDown.DefaultRules(MarkDown.Styles), this.state);
    let mapArray = [];
    results.map(function(v){
      mapArray.push(v.element, v.interval);
    });
    return (
      <TouchableWithoutFeedback onPress={() => this.toggle()}>
        <View style={{flex: 1}}>{mapArray}</View>
      </TouchableWithoutFeedback>
    )
  }
}

