import React from 'react';
import ReactDOM from 'react-dom';
import { type } from 'os';
let CounterContext = React.createContext(null); // 使用了ts，此处必须传入一个参数，null安全

// useState 是 useReducer的语法糖
let hookStates = []; // 保存状态的数组 [0,0]
let hookIndex = 0; // 索引
// function useState (initialState) {
//   hookStates[hookIndex] = hookStates[hookIndex] || initialState;
//   let currentIndex = hookIndex;
//   function setState (newState) {
//     hookStates[currentIndex] = newState;
//     render();
//   }
//   return [hookStates[hookIndex++], setState];
// }

function useReducer (reducer, initialState) {
  hookStates[hookIndex] = hookStates[hookIndex] || initialState;
  let currentIndex = hookIndex;
  function dispatch (action) {
    // useState 是 useReducer的语法糖
    hookStates[currentIndex] = reducer ? reducer(hookStates[currentIndex], action) : action;
    // hookStates[currentIndex] = reducer(hookStates[currentIndex], action);
    render();
  }
  return [hookStates[hookIndex++], dispatch];
}
// useState 是 useReducer的语法糖
function useState (initialState) {
  return useReducer(null, initialState);
}

/**
 * useReducer
 * 他接收一个行如 (state,action) => newState 的reducer，并返回当前的state
 * 以及预期配套的dispatch方法
 *

 */
// useState 是 useReducer的语法糖****验证
function Counter () {
  let [number1, setNumber1] = useState(0); // hookStates[0] = 0 0
  let [number2, setNumber2] = useState(0); // hookStates[0] = 0 1
  return (
    <div>
      <p>{number1}</p>
      <button onClick={() => setNumber1(number1 + 1)}>+</button>
      <hr />
      <p>{number2}</p>
      <button onClick={() => setNumber2(number2 + 1)}>+</button>
    </div>
  );
}

function counterReducer (state, action) {
  switch (action.type) {
    case 'add':
      return state + 1;
    case 'min':
      return state - 1;
    default:
      return 0;
  }
}

function App () {
  // reducer 初始状态
  // let [state, dispatch] = React.useReducer(counterReducer, 0);
  let [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>useReducer</h1>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: 'add' })}>+</button>&nbsp;
      <button onClick={() => dispatch({ type: 'min' })}>-</button> &nbsp;
      <button onClick={() => dispatch({ type: 'reset' })}>重置</button>
    </div>
  );
}

function render () {
  hookIndex = 0; // 最上面定义过了
  ReactDOM.render(
    <div>
      <h1>自定义hooks</h1>

      <App></App>
      <Counter></Counter>
    </div>,
    document.querySelector('#root'),
  );
}
render();
// import App from './App';
// import './index.less';

// ReactDOM.render(<App />, document.querySelector('#root'));
