import React from 'react';
import ReactDOM from 'react-dom';

/**
 *
 */

function Counter () {
  let [number1, setNumber1] = React.useState(0); // hookStates[0] = 0 0
  React.useEffect(() => {
    console.log('React.useEffect...')
    let timer = setInterval(() => {
      setNumber1((state) => state + 1);
    }, 1000);
    return () => {// 返回一个销毁函数
      console.log('销毁...')
      clearInterval(timer)
    }
  }, [number1]);

  return (
    <div>
      <p>{number1}</p>
      <button onClick={() => setNumber1(number1 + 1)}>+</button>
      <hr />
    </div>
  );
}

function App () {
  return (
    <div>
      <h1>useReducer</h1>

      <button onClick={() => console.log(66)}>重置</button>
    </div>
  );
}

function render () {
  // hookIndex = 0; // 最上面定义过了
  ReactDOM.render(
    <div>
      <h1>自定义hooks</h1>

      {/* <App></App> */}
      <Counter></Counter>
    </div>,
    document.querySelector('#root'),
  );
}
render();
// import App from './App';
// import './index.less';

// ReactDOM.render(<App />, document.querySelector('#root'));
