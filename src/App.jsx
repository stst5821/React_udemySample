import React, { useEffect, useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';

const App = () => {
  // useStateから配列の分割代入で取り出す。[stateとして使用する変数名,stateを変更するための関数]
 const [num,setNum] = useState(0);
 const [faceShowFlag, setFaceShowFlag] = useState(true);

 const onClickCountUp = () => {
   setNum(num + 1);
 }; 

 const onClickSwitchShowFlag = () => {
   setFaceShowFlag(!faceShowFlag);
 }

//  numが変わったときだけ、実行する。
 useEffect(() => {
  if (num % 3 === 0) {
    // faceShowFlagがfalseの場合のみ、右辺を実行する。
     faceShowFlag || setFaceShowFlag(true);
   } else {
    // faceShowFlagがfalseの場合のみ、右辺を実行する。
     faceShowFlag && setFaceShowFlag(false);
   }
  // 第2引数の中身が変わったときだけuseEffectの中身を実行する。配列の中身を空白にすると、1回だけ実行するようにできる。
 },[num]); // 今回の場合はnumが変わったときに実行する。

 

  return (
  <>
    <h1 style={{ color: 'red' }}>こんにちは！</h1>
    <ColorfulMessage color ="blue">お元気ですか</ColorfulMessage>
    <ColorfulMessage color ="pink">元気です。</ColorfulMessage>
    <p>おげんきですか？</p>
    {/* javascript関数は{}の中に書く */}
    <button onClick={onClickCountUp}>カウントアップ</button>
    <br />
    <button onClick={ onClickSwitchShowFlag }>on/off</button>
    <p>{num}</p>
    {/* && = 左辺の要素がtrueの場合、右辺の要素を返す */}
    {faceShowFlag && <p>＼(^o^)／</p> }
    
  </>
  );
  
};

export default App;

