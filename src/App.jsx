import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onclickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      // faceShowFlagが　false　のときだけsetFaceShowFlagで　true　にする
      faceShowFlag || setFaceShowFlag(true);
    } else {
      // faceShowFlagが　true　の時だけsetFaceShowFlagで　false　にする
      faceShowFlag && setFaceShowFlag(false);
    }

    // 第２引数に変数を指定すると、その変数が更新された時だけ実行される。
    // 読み込み時の最初の1回だけ実行したい時は第２引数を空にする。
    // 関数内で使用されている変数が全て指定されていないとESLintのアラートが表示される
    // （この場合faceShowFlagが含まれていない）
    // 下記のコメントでアラートを非表示にできる
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1>Hello.</h1>
      <button onClick={onclickCountUp}>Count</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>ヽ(´ー｀)</p>}
    </>
  );
};

export default App;
