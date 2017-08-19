import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Sound from 'react-native-sound';

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
  image: {
    width:       100,
    height:      100,
    borderWidth: 0
  },
  interval: 10
};

const defaultRules = (styles = Styles) => ({
  head: (content, key) => {
    const {type, children} = content;
    let reContent = [];
    console.log(children);
    if (Array.isArray(children)) {
      children.map(function(v) {
        if (v.type.displayName === 'Text') {
          v = React.createElement(
            Text,
            {key: v.key, style: [styles['heading' + type.length], v.props.style]},
            v.props.children
          );
        }
        reContent.push(v)
      })
    } else {
      reContent = children
    }
    return React.createElement(
      View,
      {key: key, style: {flexDirection: 'row', alignItems: 'center'}},
      reContent
    );
  },
  hide: (content, key, state) => {
    state.haveHide = true;
    let props = {key: key};
    if (state.isHide) {
      props.style = {color: '#fff'};
    }
    return React.createElement(
      Text,
      props,
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
  image: (content, key, state) => {
    return React.createElement(
      Image,
      {
        key:    key,
//       resizeMode: styles.resizeMode ? styles.resizeMode : 'contain',
        source: {uri: content.uri},
        style:  styles.image
      }
    )
  },
  sound: (uri, key, state) => {
    return React.createElement(
      Audio,
      {key: key, uri: uri}
    )
  },
  text: (text, key) => {
    return React.createElement(
      Text,
      {key: key},
      text
    );
  },
  nothing: (content) => {
    return content;
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
  const LINK_INSIDE = "(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*";
  const LINK_HREF_AND_TITLE = "\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*";

  let results = [];
  const regex = [
    {type: 'head', reg: /^\s*(#{1,6})\s*(.*)/}, //#
  ];
  const childRegex = [
    {type: 'hide', reg: /<hide>(.*?)<\/hide>/g},
    {type: 'italic', reg: /\*(.*?)\*/g},
    {type: 'image', reg: new RegExp(
      "!\\[(" + LINK_INSIDE + ")\\]\\(" + LINK_HREF_AND_TITLE + "\\)",
      'g'
    )},
    {type: 'sound', reg: /(?:<s>)\((.*)\)/g},
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
//     let count = 0;
    while (mat = reg.exec(str)) {
//       count++;
      if (lastIndex !== mat.index) {
        let pre = str.slice(lastIndex, mat.index);
        pre = parseChildrenRegex(pre, n);
        if (Array.isArray(pre)) {
          oneLine.push(...pre)
        } else {
          oneLine.push({content: pre, type: 'text'});
        }
      }
      // 如图片或链接这些不需要递归解析
      let matContent;
      if (mat.length > 2) {
        matContent = {alt: mat[1], uri: mat[2]}
      } else {
        matContent = parseChildrenRegex(mat[1], n);
      }
      oneLine.push({content: matContent, type: type});
      lastIndex = reg.lastIndex;
    }
    if (lastIndex !== str.length) {
      let last = str.slice(lastIndex, str.length);
      last = parseChildrenRegex(last, n);
      if (Array.isArray(last)) {
        oneLine.push(...last)
      } else {
        oneLine.push({content: last, type: 'text'});
      }
    }
    /*if (oneLine.length > 0 && count === 0) {
      oneLine = oneLine[0].content
    }*/
    return oneLine;
  };

  const mapOne = (obs, key) => {
    let oneLine = [];
    if (Array.isArray(obs)) {
      obs.map(function(ob, i) {
        oneLine.push(rules[ob.type](mapOne(ob.content), key + '-' + i, state));
      })
    } else {
      oneLine = obs;
    }
    return oneLine;
  };

  contextArray.map(function(text, i) {
    let mat, arr;
    regex.map(function(reg) {
      let re = text.match(reg.reg);
      if (re) {
        mat = parseChildrenRegex(re[2]);
        arr = mapOne(mat, i);
        results[i] = {element: rules[reg.type]({type: re[1], children: arr}, i), interval: rules['interval'](countN[i] || 0, i)};
        return true;
      }
    });
    if (!results[i]) {
      mat = parseChildrenRegex(text);
      arr = mapOne(mat, i);
      results[i] = {element: rules['nothing'](arr, i), interval: rules['interval'](countN[i] || 0, i)};
    }
  });
  return results;
};

const Audio = ({uri}) => {
  const sound = new Sound(uri, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log(error)
    }
  });
  return (
    <Text onPress={() => sound.play((success) => {
      if (!success) {
        console.log('Sound did not play');
      }
    })
    } style={{
      paddingLeft: 10,
      paddingRight: 10,
    }}>
      <Image source={require('./sound@3x.png')} style={{
        width: 50,
        height: 50,
      }} />
    </Text>
  )
};

export default class MarkDown extends Component {
  static Styles = styles;
  static DefaultRules = defaultRules;

  constructor() {
    super();
    this.state = {
      isHide: false,
      haveHide: false
    };
  }

  toggle = () => {
    if (this.state.haveHide) {
      this.setState({
        isHide: !this.state.isHide,
      });
    }
  };

  render() {
    this.state.haveHide = false;
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

