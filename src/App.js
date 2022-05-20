import './App.css';
import HookComp from './components/HookComp';
import ReducerComp from './components/ReduceComponent';
import ReducerComp2 from './components/ReduceComponent2';
import ExReducer from './components/ExReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HookComp />
        <ReducerComp />
        <ReducerComp2 />
        <ExReducer />
      </header>
    </div>
  );
}

export default App;
