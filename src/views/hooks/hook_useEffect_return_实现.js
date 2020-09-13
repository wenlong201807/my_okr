import React from 'react';
import ReactDOM from 'react-dom';

/**
 * useEffect  带有返回值的这种（可销毁原有实例）1:30:00
 */

let hookStates = []; // 保存状态的数组 [0,0]
let hookIndex = 0; // 索引
function useState(initialState) {
  hookStates[hookIndex] = hookStates[hookIndex] || initialState;
  let currentIndex = hookIndex;
  function setState (newState) {
    if (typeof newState === 'function') {
      newState = newState(hookStates[currentIndex])
    }
    hookStates[currentIndex] = newState;
    render();
  }
  return [hookStates[hookIndex++], setState];
}

// 自定义useEffect
function useEffect(callback, dependencies) {
  if (hookStates[hookIndex]) {
    // 说明不是第一次渲染
    let [oldDestory, lastDependencies] = hookStates[hookIndex];
    // 判断一下新的依赖数组中的每一项是否与上次完全相等
    let same = dependencies.every((item, index) => item === lastDependencies[index]);
    if (same) {
      hookIndex++;
    } else {
      oldDestory();
      let destory = callback();
      hookStates[hookIndex++] = [destory, dependencies];
    }
  } else {
    // 说明是第一次渲染
    let destory = callback();
    hookStates[hookIndex++] = [destory, dependencies];
  }
}

function Counter() {
  let [number1, setNumber1] = useState(0); // hookStates[0] = 0 0
  useEffect(() => {
    console.log('React.useEffect...');
    let timer = setInterval(() => {
      setNumber1((state) => state + 1); // 扩展，既可以传函数，也可以传值
    }, 1000);
    return () => {
      // 返回一个销毁函数
      console.log('销毁...');
      clearInterval(timer);
    };
  }, [number1]);

  return (
    <div>
      <p>{number1}</p>
      <button onClick={() => setNumber1(number1 + 1)}>+</button>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>useReducer</h1>

      <button onClick={() => console.log(66)}>重置</button>
    </div>
  );
}

function render() {
  hookIndex = 0; // 最上面定义过了
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
