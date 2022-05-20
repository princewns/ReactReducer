import { useReducer } from "react"

function reducer(state, action) {
  /*이전 state의 값을 스프레드 연산자로 안의 내용을 꺼낸후
  action.name과 action.value를 통해 새로운 속성값 작성*/
  return {
    /* 분할연산자를 사용하는 이유는 값을 동시에 들고오지 않으면 다른 값은 빈값이
    되므로 하나씩 따로 들고와서 값을 할당시킨다. */
    ...state,
    [action.name] : action.value
  }
}

const ReducerComp2 = () => {
  const [state, dispatch] = useReducer(reducer, {
    name : '',
    nickname : ''
  });
  /* 이벤트가 실행될때 이벤트 객체를 들고와서 현재 실행되는 이벤트 타겟을
  dispatch로 넘겨준다. */
  const onChange = (e) => {dispatch(e.target)};

  return(
    <div>
      <h2>Reducer Hook2</h2>
      <input type='text' name='name' onChange={onChange}></input><br/>
      <input type='text' name='nickname' onChange={onChange}></input>
      <p>{state.name}</p>
      <p>{state.nickname}</p>
    </div>
  )
};
export default ReducerComp2;