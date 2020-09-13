import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 为了减少组件的渲染，我们可以优化，设置组件的属性：变了子组件才重新渲染，如果没变，就不重复渲染
 * useMemo  useCallback
 *
 * 默认状态，父组件改有事件被触发，dom更新，子组件必跟着变，如此，性能消耗极严重
 */
let Child = ({ data, onButtonClick }) => {
  // let Child = ({ data }) => {
  console.log('child..render');
  // return <button>我是子组件:{data.number}</button>;
  return <button onClick={onButtonClick}>我是子组件:{data.number}</button>
};
Child = React.memo(Child);
let MyData = { number: 0 }; // 独立指向，没有涉及组件，mome是浅比较

// 验证是否是原来的数据，通过引用地址是否一致来确认
let lastData
function App() {
  const [number, setNumber] = React.useState(0);
  const [name, setName] = React.useState('wenlong');
  // // 每次渲染 App 都要声明一个新对象(引用地址会改变，自然要发生重新渲染操作)
  // let data = { number }
  // // 每次渲染 App 都要声明一个新函数 (引用地址会改变，自然要发生重新渲染操作)
  // let addClick = () => {
  //   setNumber(number+1)
  // }

  // 优化操作：只有依赖的变量发生变化的话，才会重新执行得到新的函数，否则时钟用上次的函数，或对象，数组
  // 优势：子组件渲染，不会重新渲染父组件；父组件渲染，不会重新渲染子组件
  // 使用useMemo优化操作（针对数组，对象的方式），1参数是生成对象的工厂， 2参数是 依赖变量，类似useEffect那样
  let data = React.useMemo(() => ({ number }), [number]);
  console.log('确认是否缓存：', lastData === data)
  lastData = data
  // 使用useMemo优化操作（针对函数的方式），1参数是生成对象的工厂， 2参数是 依赖变量，类似useEffect那样
  let addClick = React.useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  return (
    <div>
      <p>父组件定义，父组件变化：{name}</p>
      <p>父组件定义，传入子组件，子组件操作变化:{number}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {/* <Child data={data}></Child> */}
      <Child data={data} onButtonClick={addClick}></Child>
    </div>
  );
}

function render() {
  ReactDOM.render(
    <div>
      <h1>asdff</h1>
      <App></App>
    </div>,
    document.querySelector('#root'),
  );
}
render();
// import App from './App';
// import './index.less';

// ReactDOM.render(<App />, document.querySelector('#root'));
