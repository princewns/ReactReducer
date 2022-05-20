import { useState, useEffect } from "react"

const HookComp = () => {
  // useState는 stateHook으로 사용된다.
  const [count, setCount] = useState(0);
  // stateHook은 여러개 작성할수 있다.
  const [userName] = useState('홍길동');
  const [date, setDate] = useState(new Date());

  /* componentDidMount, componentDidUpdate, componentWillUnmount
  과 동일하게 사용한다. */
  useEffect(() => { 
    // componentDidMount, componentDidUpdate 과 동일하게 움직임
    document.title = count;
    console.log('업데이트')
    setInterval(() => tick(), 1000);
  },[count]);
  //두번째 인수를 작성하지 않았을때, 업데이트와 마운트가 같이 일어난다.
  //두번째 인수로는 []안에 업데이트할 변수 이름을 작성해준다.
  //[] 빈값으로 두면 처음 mount 할때만 실행이된다.

  //시간을 출력 > useEffect

  const tick = () => {
    setDate(new Date());
  }

  return (
    <div>
      <h2>StateHook</h2>
      <h3>{date.toLocaleTimeString()}</h3>
      <h3>{userName}</h3>
      <p>{count}</p>
      <button onClick={() => {setCount(count+1)}}>+1</button>
    </div>
  );
};
export default HookComp;