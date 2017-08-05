import React from 'react';
import {TouchableOpacity} from 'react-native';
import CS from '../css/convertSize';
import Svg, {Path} from 'react-native-svg';
import {
  AppStatusBar,
  MainView,
  Occupied
} from '../css/styles';
import {
  TopView,
  TopText,
  ContentView,
  RowText,
  TextView,
  RememberImage,
  OccupiedView,
  RememberButtonView,
  RememberTopButton,
  NormalFootButton,
  RememberTopButtonText,
  RememberFootButton,
  RememberFootButtonText,
} from '../css/studyStyle';
import {history} from '../components/routerRoot';
import MarkDown from '../../plugs/parse-markdown'

export default NoteDetails = ({review, post, ...rest}) => (
  <MainView>
    <AppStatusBar/>
    <TopView>
      <TouchableOpacity onPress={() => {history.go(-1)}}>
        <Svg width={CS.w(12)} height={CS.h(20)} viewBox="0 0 10 16">
          <Path
            d="M0,8 C0,7.71323323 0.109520046,7.42646645 0.327917163,7.20785501 L7.20774785,0.328238651 C7.64539938,-0.109412884 8.35481494,-0.109412884 8.79225215,0.328238651 C9.22968936,0.76567586 9.22968936,1.47509142 8.79225215,1.91274296 L2.70478079,8 L8.79203783,14.087257 C9.22947504,14.5246943 9.22947504,15.2343241 8.79203783,15.6717613 C8.35460062,16.1094129 7.64518506,16.1094129 7.20753352,15.6717613 L0.327702838,8.79214499 C0.109305721,8.57353355 0,8.28676677 0,8 Z"
            fill="rgba(255, 255, 255, 0.87)"/>
        </Svg>
      </TouchableOpacity>
      <TopText>{review ? '背笔记' : '查看笔记'}</TopText>
    </TopView>
    <ContentView>
      {/*<RowText size="24">{post.Name}</RowText>
      <OccupiedView/>
      <TextView>
        <RowText size="16">['æpl] </RowText>
        <Svg width={CS.w(15)} height={CS.h(15)} viewBox="0 0 13 12">
          <Path
            d="M9.59944953,7.88382107 C10.9130493,6.7738577 10.9117874,4.96753884 9.59778351,3.8566807 C9.52521033,3.7949415 9.52541525,3.69495085 9.59817654,3.63343535 C9.67120081,3.57169615 9.78952933,3.57147246 9.8679311,3.64036982 C11.3237056,4.87537743 11.3242149,6.87138773 9.86584223,8.10729011 C9.79276097,8.16902931 9.67407007,8.16858192 9.6011755,8.10706642 C9.52828254,8.04555092 9.52795807,7.94600765 9.59944953,7.88382107 Z M8.33786434,0.948898794 L8.34113869,10.7909319 C8.3415522,11.1750123 8.06731501,11.521065 7.64691655,11.6678074 C7.22702649,11.8154446 6.74346376,11.7340205 6.42135182,11.4622338 L2.77663639,8.38511649 L1.12285194,8.38511649 C0.812336814,8.38511649 0.531602058,8.27908614 0.328307308,8.10729011 C0.125025016,7.93549409 -0.000287871555,7.69837979 4.96620872e-07,7.4362119 L0.00344516767,4.30451356 C0.00402190402,3.78017778 0.507433009,3.35516158 1.12737679,3.35560897 L2.77967931,3.35516158 L6.42138328,0.278044271 C6.74253373,0.00648128711 7.22532051,-0.0747191769 7.64492795,0.0724706449 C7.78383181,0.121011969 7.90634234,0.191475182 8.00848996,0.277820579 C8.2151765,0.452524607 8.33802974,0.692323223 8.33786434,0.948898794 Z M2.77701909,7.75251343 C2.78205261,7.75228974 2.78602485,7.75475036 2.79026322,7.75519774 L2.79279942,3.98575141 C2.78776928,3.9859751 2.78406188,3.98776464 2.77903174,3.98798834 L1.12680766,3.98821203 C0.992056705,3.98798834 0.902785464,4.04637214 0.861982917,4.08082082 C0.821179868,4.1152695 0.752539001,4.19020657 0.752163786,4.30451356 L0.749137251,7.4362119 C0.74929212,7.5500715 0.817830644,7.62545595 0.858593977,7.65990464 C0.899357811,7.69435332 0.988579649,7.75228974 1.12342106,7.75251343 L2.77701909,7.75251343 Z M3.30675409,7.93773102 L6.49791455,10.6321101 L6.49789001,1.10816802 L3.30886524,3.80254706 C3.26807924,3.83699574 3.2153875,3.85690439 3.16719282,3.88240536 L3.16506303,7.85742532 C3.21299994,7.88314999 3.2657089,7.90305864 3.30675409,7.93773102 Z M7.35995507,11.083522 C7.50069673,11.0345333 7.5913215,10.9195552 7.59128902,10.7911556 L7.58932911,0.948675101 C7.58930783,0.864566631 7.55039362,0.785155709 7.47947063,0.725206055 C7.4448036,0.695902307 7.40431754,0.672861955 7.35827712,0.656756077 C7.21804065,0.607543675 7.05797558,0.634610496 6.95056924,0.725429748 L6.8719964,0.791866491 L6.87273578,10.9484116 L6.95146951,11.0148483 C7.0591018,11.1056676 7.21974119,11.1329581 7.35995507,11.083522 Z M10.3914709,3.18560248 C10.2457967,3.06212409 10.2459158,2.86191909 10.3916639,2.73866439 C10.5379345,2.61496231 10.7745515,2.61496231 10.9263193,2.74537518 C12.9672325,4.47474374 12.9692978,7.27202143 10.9263264,9.00206107 C10.7798975,9.12576315 10.5430057,9.12576315 10.3963789,9.00206107 C10.2502887,8.87880637 10.2498786,8.67904875 10.3944527,8.55512297 C12.1460683,7.07494813 12.1435037,4.6666721 10.3914709,3.18560248 Z"
            fillRule="evenodd" fill="rgba(106, 190, 167, 0.58)"/>
        </Svg>
      </TextView>
      <OccupiedView/>
      <RowText size="14">n. 苹果,苹果树,苹果似的东西</RowText>
      <OccupiedView rows="2"/>
      <RememberImage source={require('../css/img/apple.png')}/>
      <OccupiedView rows="2"/>
      <RowText size="14">列句</RowText>
      <OccupiedView/>
      <RowText size="14">
        1. I twisted an apple off the tree
        我从树上摘下来一个苹果
      </RowText>
      <OccupiedView/>
      <RowText size="14">
        2. He hemisected an apple and gave it to me
        他把一个苹果切成了两半，把一半给了我
      </RowText>
      <OccupiedView/>
      <RowText size="14">
        3. He nibbled away the apple peel, then ate the flesh
        他先慢慢地咬去苹果皮，然后再吃果肉
      </RowText>
      <Occupied/>*/}
      <MarkDown>{post.Content}</MarkDown>
      <RememberButton review={review} post={post} {...rest} />
    </ContentView>
  </MainView>
);

const RememberButton = ({review, post, upLevel, addPoint, getPointPost, ...rest}) => {
  const upLevelAndNext = async (isForget) => {
    await upLevel(post.ReciteId, isForget);
    await addPoint();
    const over = getPointPost();
    if (over) {
      history.go(-1);
    }
  };
  if (review) {
    return post.Level ? (
      <RememberButtonView>
        <RememberTopButton onPress={() => upLevelAndNext(false)}>
          <RememberTopButtonText>记得</RememberTopButtonText>
        </RememberTopButton>
        <RememberFootButton onPress={() => upLevelAndNext(true)}>
          <RememberFootButtonText>忘记</RememberFootButtonText>
        </RememberFootButton>
      </RememberButtonView>
    ) : (
      <AddReciteView post={post} {...rest} />
    )
  } else {
    return post.Level ? null : (
      <AddReciteView post={post} {...rest} />
    )
  }
};

const AddReciteView = ({post, addRecite, getPost, ubId}) => (
  <NormalFootButton onPress={() => {
    addRecite(ubId, post.Id);
    getPost(ubId, post.Id)
  }}>
    <RememberTopButtonText>加入记忆</RememberTopButtonText>
  </NormalFootButton>
);