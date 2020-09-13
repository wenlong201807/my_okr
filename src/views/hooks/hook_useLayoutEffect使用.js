import React from 'react';
import ReactDOM from 'react-dom';
/**
 * useEffect 就是一个Effect Hook,给函数组件增加了操作副作用的能力
 * 他跟class组件中的  componentDidMount ,componentDidUpdate,componentWillUnmount 具有相同的用途，
 * 只不过被合并成一个api了
 *
 * useEffect(didUpdate)
 */

let hookStates = []; // 保存状态的数组 [0,0]
let hookIndex = 0; // 索引
function useState(initialState) {
  hookStates[hookIndex] = hookStates[hookIndex] || initialState;
  let currentIndex = hookIndex;
  function setState(newState) {
    hookStates[currentIndex] = newState;
    render();
  }
  return [hookStates[hookIndex++], setState];
}

// 自定义useEffect
function useEffect(callback, dependencies) {
  if (hookStates[hookIndex]) {
    // 说明不是第一次渲染
    let lastDependencies = hookStates[hookIndex];
    // 判断一下新的依赖数组中的每一项是否与上次完全相等
    let same = dependencies.every((item, index) => item === lastDependencies[index]);
    if (same) {
      hookIndex++;
    } else {
      hookStates[hookIndex++] = dependencies; // 可以使用
      // hookStates[hookIndex] = dependencies; // 也可以使用？
      // 答案这里面的逻辑只有第一次会进来，以后都不会进来的，所以都只会影响第一次
      callback();
    }
  } else {
    // 说明是第一次渲染
    hookStates[hookIndex++] = dependencies;
    // hookStates[hookIndex] = dependencies;
    callback();
  }
}

function App() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('wenlong');

  useEffect(() => {
    document.title = number + name;
    console.log(number);
  }, [number]);

  return (
    <div>
      <p>父组件定义，父组件变化number：{number}</p>
      <p>父组件定义，父组件变化name：{name}</p>
      {/* <p>父组件定义，传入子组件，子组件操作变化:{number}</p> */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setNumber(number + 1)}>+</button>
      {/* <Child data={data}></Child> */}
      {/* <Child data={data} onButtonClick={addClick}></Child> */}
    </div>
  );
}

const Animation = () => {
  let red = React.useRef(); // {current:null} // 默认值
  let green = React.useRef(); // {current:null}

  // useLayoutEffect是微任务，会增加一个微任务，主栈结束后，要先清空微任务，再进行浏览器渲染
  React.useLayoutEffect(() => {
    red.current.style.transform = 'translate(500px)'; // 起点没有，直接在终点// 无法显示动画效果
    red.current.style.transition = 'all 500ms';
  });
  // useEffect是宏任务
  React.useEffect(() => {
    green.current.style.transform = 'translate(500px)'; //起点 -》 终点，有一个变化过程
    green.current.style.transition = 'all 500ms';
  });

  let style = { width: '100px', height: '100px' };

  return (
    <div>
      <div style={{ ...style, background: 'red' }} ref={red}></div>
      <div style={{ ...style, background: 'green' }} ref={green}></div>
    </div>
  );
};

function render() {
  hookIndex = 0;
  ReactDOM.render(
    <div>
      <h1>自定义hooks</h1>
      <Animation></Animation>
      {/* <App></App> */}
    </div>,
    document.querySelector('#root'),
  );
}
render();
// import App from './App';
// import './index.less';

// ReactDOM.render(<App />, document.querySelector('#root'));
