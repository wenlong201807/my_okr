import React from 'react';
import ReactDOM from 'react-dom';
let CounterContext = React.createContext(null); // 使用了ts，此处必须传入一个参数，null安全
let hookIndex = 0;

// 子组件
function Counter () {
  let { state, setState } = React.useContext(CounterContext);

  return (
    <div>
      <h1>React.createContext;</h1>
      <p>{state.number}</p>
      <button onClick={() => setState({ number: state.number + 1 })}>+</button>
    </div>
  );
}
function Counter2 () {

  return (
    <CounterContext.Consumer>
      {(value) => (
        <div>
          <h1>React.createContext;</h1>
          <p>{value.state.number}</p>
          <button onClick={() => value.setState({ number: value.state.number + 1 })}>+</button>
        </div>
      )}
    </CounterContext.Consumer>
  );
}

/**
 * useContext
 * CounterContext.Provider 先提供  CounterContext.Consumer 后消费

 */

function App () {
  const [state, setState] = React.useState({ number: 0 });

  return (
    <CounterContext.Provider value={{ state, setState }}>
      <Counter></Counter>
      <Counter2></Counter2>
    </CounterContext.Provider>
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
