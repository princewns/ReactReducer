import { useReducer } from "react";

function reducer(state, action) {
  switch(action.type) {
    case 'reset' :
      return {name : '홍길동'};
    case 'onChange' :
      return {name : action.payload};
    default :
      throw new Error();
  }
}

const ExReducer = () => {
  const [state, dispatch] = useReducer(reducer, {name : ''});
  const onChange = (e) => {dispatch({type : 'onChange', payload : e.target.value})};

  return(
    <div>
      <h2>Reducer Hook3</h2>
      <input type='text' name='name' onChange={onChange} value={state.name}></input>
      <button onClick={()=>{dispatch({type : 'reset'})}}>리셋</button>
      <p>{state.name}</p>
    </div>
  );
}
export default ExReducer;