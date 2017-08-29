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
    fontSize: 12,
  },
  heading6: {
    fontSize: 10,
  },
  italic: {
    fontStyle: 'italic'
  },
  image: {
    width:       100,
    height:      100,
    borderWidth: 0
  },
  interval: 5
};

const defaultRules = (styles = Styles) => ({
  head: (content, key, state, match) => {
    const type = match[1];
    if (Array.isArray(content)) {
      let reContent = [];
      content.map(function(v) {
        if (v.type.displayName === 'Text') {
          v = React.createElement(
            Text,
            {key: v.key, style: [styles['heading' + type.length], v.props.style]},
            v.props.children
          );
        }
        reContent.push(v)
      });
      return React.createElement(
        View,
        {key: key, style: {flexDirection: 'row', alignItems: 'center'}},
        reContent
      );
    } else {
      return React.createElement(
        Text,
        {key: key, style: styles['heading' + type.length]},
        content
      );
    }
  },
  hide: (content, key, state) => {
    state.haveHide = true;
    let props = {key: key};
    if (state.isHide) {
      props.style = {opacity: 0};
    }
    return React.createElement(
      View,
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
        source: content.uri ? {uri: content.uri} : require('./null.png'),
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
  interval: (content, key, state, match) => {
    let n = match.length - 1;
    return React.createElement(
      Text,
      {key: 'interval' + key, style: {margin: 0, padding: 0, height: styles.interval * n}},
    );
  },
});

const translate = (context, rules, state) => {
  const LINK_INSIDE = "(?:\\[[^\\]]*\\]|[^\\]]|\\](?=[^\\[]*\\]))*";
  const LINK_HREF_AND_TITLE = "\\s*<?((?:[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*";

  const regex = [
    {type: 'head', reg: /\s*(#{1,6})\s*(.*)(?:\n*)/g},
    {type: 'hide', reg: /<hide>([\s\S]*?)<\/hide>/g},
    {type: 'interval', reg: /(\n+)/g},
    {type: 'italic', reg: /\*(.*?)\*/g},
    {type: 'image', reg: new RegExp(
      "!\\[(" + LINK_INSIDE + ")\\]\\(" + LINK_HREF_AND_TITLE + "\\)",
      'g'
    )},
    {type: 'sound', reg: /(?:<s>)\((.*?)\)/g},
  ];

  const parseRegex = (str, i = 0) => {
    if (i >= regex.length) {
      return str;
    }
    const {type, reg} = regex[i];
    let lastIndex = 0;
    let mat;
    let oneLine = [];
    let n = i+1;
//     let count = 0;
    while (mat = reg.exec(str)) {
//       count++;
      if (lastIndex !== mat.index) {
        let pre = str.slice(lastIndex, mat.index);
        pre = parseRegex(pre, n);
        if (Array.isArray(pre)) {
          oneLine.push(...pre)
        } else {
          oneLine.push({content: pre, type: 'text', match: null});
        }
      }
      // 如图片或链接这些不需要递归解析
      let matContent;
      if (mat.length > 2) {
        if (type === 'head') {
          matContent = parseRegex(mat[2], n);
        } else {
          matContent = {alt: mat[1], uri: mat[2]};
        }
      } else {
        matContent = parseRegex(mat[1], n);
      }
      oneLine.push({content: matContent, type: type, match: mat});
      lastIndex = reg.lastIndex;
    }
    if (lastIndex !== str.length) {
      let last = str.slice(lastIndex, str.length);
      last = parseRegex(last, n);
      if (Array.isArray(last)) {
        oneLine.push(...last)
      } else {
        oneLine.push({content: last, type: 'text', match: null});
      }
    }
    /*if (oneLine.length > 0 && count === 0) {
      oneLine = oneLine[0].content
    }*/
    return oneLine;
  };

  const mapOne = (obs) => {
    let oneLine = [];
    if (Array.isArray(obs)) {
      obs.map(function(ob, i) {
        oneLine.push(rules[ob.type](mapOne(ob.content), i, state, ob.match));
      })
    } else {
      oneLine = obs;
    }
    return oneLine;
  };

  let pr = parseRegex(context);
  let results = null;
  if (pr.length > 0) {
    results = mapOne(pr);
  }
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

  componentWillMount() {
    this.setState({
      isHide: this.props.hide || false,
    });
  }

  componentWillReceiveProps() {
    this.setState({
      isHide: this.props.hide || false,
    });
  }

  render() {
    let child = this.props.children || '';
    child = Array.isArray(child)
      ? child.join('') : child;
    const results = translate(child, MarkDown.DefaultRules(MarkDown.Styles), this.state);
    const {...rest} = this.props;
    return (
      <View {...rest} style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={() => this.toggle()}>
          <View>{results}</View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

