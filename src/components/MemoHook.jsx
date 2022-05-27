//input 태그로 숫자값을 입력받으면 > inputnum
//추가라는 버튼을 눌렀을때 li 태그에 추가됨 > number 배열
// number 배열의 합을 h3태그로 출력

import { useState, useMemo, useCallback } from "react";

const MemoHook = () => {
  const [inputnum, setInputnum] = useState(0);
  const [number, setNumber] = useState([10,6]);
  const onChange = useCallback((e) => {
    console.log('onChange 실행');
    setInputnum(e.target.value);
  }, []); /*콜백함수를 사용해서 처음 랜더링 할때만 함수 생성
  화살표함수는 익명함수중 하나(한번 사용하고 버림)
  이벤트에서 사용되는 익명함수는 이벤트가 실행될때마다 함수를 만듦
  동일한 일을 하는 함수는 재사용하기 위해서 Callback 사용
  사용하는 값 또는 메소드가 바뀌지 않을때 rander할 필요가 없다.*/
  const addNum = useCallback(() => {
    setNumber([...number, parseInt(inputnum)]);
    setInputnum(0);
  },[inputnum, number]);
  /*콜백함수를 사용해서 inputnum과 number 값이 바뀔때만 함수랜더(생성)
  사용하는 값이 바뀔때만 랜더해서 사용*/

  const allsum = (list) => {//useMemo를 쓰지않아 useState값이 바뀔때마다 호출
    //for문을 사용해서 더함, 배열의 reduce((a,b) => (a+b))메소드를 이용해서 더함
    console.log('더하는 중입니다.');
    return list.reduce((a,b) => (a+b));
  };
  //useMemo를 사용할 함수
  const sum  = useMemo(() => allsum(number),[number]);

  return (
    <div>
      <h3>MemoHook</h3>
      <input type='text' onChange={onChange} value={inputnum} />
      <button onClick={addNum}>추가</button>
      {/* 메소드의 리턴값을 보여줌 */}
      <h3>더한 값 : {sum}</h3>
      <ul>
        {number.map((n,i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
};

export default MemoHook;