import React from 'react';
import ReactDOM from 'react-dom';
import { type } from 'os';
let CounterContext = React.createContext(null); // 使用了ts，此处必须传入一个参数，null安全
let hookIndex = 0;

/**
 * useReducer
 * 他接收一个行如 (state,action) => newState 的reducer，并返回当前的state
 * 以及预期配套的dispatch方法
 *

 */

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
  let [state, dispatch] = React.useReducer(counterReducer, 0);

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
  // let hookIndex = 0;
  ReactDOM.render(
    <div>
      <h1>自定义hooks</h1>

      <App></App>
    </div>,
    document.querySelector('#root'),
  );
}
render();
// import App from './App';
// import './index.less';

// ReactDOM.render(<App />, document.querySelector('#root'));
