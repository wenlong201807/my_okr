import React from 'react';
import ReactDOM from 'react-dom';

/**
 * useRef
 */

let lastRef;
function useRef(value) {
  lastRef = lastRef || { current: value };
  return lastRef;
}

let myLast;

function Counter() {
  let [number1, setNumber1] = React.useState(0); // hookStates[0] = 0 0
  const latestCount = useRef(number1); // {current:null}

  console.log(myLast === latestCount); // 第一次不相等
  myLast = latestCount; // 之后都相等，useRef 永远都是使用同一份

  // const latestCount = React.useRef(number1); // {current:null}
  React.useEffect(() => {
    // 宏任务
    latestCount.current = number1;
    setTimeout(() => {
      // 微任务
      // 运用闭包，获取旧值 从0开始
      // console.log(`you click ${latestCount.current} times`);
      console.log(number1);
    }, 3000);
  }); // 要执行定时器里面的内容，useEffect后面不能有 []

  return (
    <div>
      <p>{number1}</p>
      <button onClick={() => setNumber1(number1 + 1)}>+</button>
      <hr />
    </div>
  );
}

function render() {
  ReactDOM.render(
    <div>
      <h1>自定义hooks</h1>
      <Counter></Counter>
    </div>,
    document.querySelector('#root'),
  );
}
render();
// import App from './App';
// import './index.less';

// ReactDOM.render(<App />, document.querySelector('#root'));
