import "./App.css";
import React, { useReducer } from "react";
import { ThemeContext } from "./components/ThemeContext";
import ExReducer from "./components/ExReducer";
import HookComp from "./components/HookComp";
import MemoHook from "./components/MemoHook";
import ReduceComponent from './components/ReduceComponent';
import ReduceComponent2 from './components/ReduceComponent2';
import ContextHook from "./components/ContextHook";
import { DispatchContext, StateContext } from "./components/DispatchContext";
import DispatchComp from "./components/DispatchComp";

function reducer(state, action) {
  switch (action.type) {
    case "id_plus":
      return { ...state, id: state.id + 1 };
    case "text_change":
      return { ...state, text: action.payload };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { id: 1, text: "reducer의 텍스트입니다" });

  return (
    <div className="App">
      <ThemeContext.Provider value={{ id: 0, text: "객체형식입니다" }}>
        <ContextHook />
      </ThemeContext.Provider>
      <DispatchContext.Consumer>{(value) => <button>{value}</button>}</DispatchContext.Consumer>

      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <h1> {state.id} </h1>
          <h3> {state.text} </h3>
          <DispatchComp />
        </StateContext.Provider>
      </DispatchContext.Provider>
      <MemoHook />
      <HookComp />
      <ReduceComponent />
      <ReduceComponent2 />
      <ExReducer />
    </div>
  );
}

export default App;