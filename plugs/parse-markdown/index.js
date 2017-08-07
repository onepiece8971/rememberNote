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
  italic: {
    fontStyle: 'italic'
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
  italic: (text, key) => {
    return React.createElement(
      Text,
      {key: key, style: styles.italic},
      text
    );
  },
  text: (text, key) => {
    return React.createElement(
      Text,
      {key: key},
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
    {type: 'hide', reg: /<hide>(.*?)<\/hide>/g},
    {type: 'italic', reg: /\*(.*?)\*/g},
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

  const parseChildrenRegex = (str, i = 0) => {
    if (i >= childRegex.length) {
      return str;
    }
    const {type, reg} = childRegex[i];
    let lastIndex = 0;
    let mat;
    let oneLine = [];
    let n = i+1;
    let count = 0;
    while (mat = reg.exec(str)) {
      count++;
      if (lastIndex !== mat.index) {
        let pre = str.slice(lastIndex, mat.index);
        pre = parseChildrenRegex(pre, n);
        oneLine.push({content: pre, type: 'text'});
      }
      let matContent = mat[1];
      matContent = parseChildrenRegex(matContent, n);
      oneLine.push({content: matContent, type: type});
      lastIndex = reg.lastIndex;
    }
    if (lastIndex !== str.length) {
      let last = str.slice(lastIndex, str.length);
      last = parseChildrenRegex(last, n);
      oneLine.push({content: last, type: 'text'});
    }
    if (oneLine.length > 0 && count === 0) {
      oneLine = oneLine[0].content
    }
    return oneLine;
  };

  const mapOne = (obs) => {
    let oneLine = [];
    if (Array.isArray(obs)) {
      obs.map(function(ob, i) {
        oneLine.push(rules[ob.type](mapOne(ob.content), i, state));
      })
    } else {
      oneLine = obs;
    }
    return oneLine;
  };

  contextArray.map(function(text, i) {
    regex.map(function(reg) {
      let re = text.match(reg.reg);
      if (re) {
        let mat = parseChildrenRegex(re[2]);
        let arr = mapOne(mat);
        results[i] = {element: rules[reg.type]({type: re[1], children: arr}, i, state), interval: rules['interval'](countN[i] || 0, i)};
        return true;
      }
    });
    if (!results[i]) {
      let mat = parseChildrenRegex(text);
      let arr = mapOne(mat);
      results[i] = {element: rules['text'](arr, i), interval: rules['interval'](countN[i] || 0, i)};
    }
  });
  return results;
};

const Hide = ({isHide, children}) => {
  return isHide ? <Text> </Text> : <Text>{children}</Text>
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

