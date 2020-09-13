import React from 'react';
import ReactDOM from 'react-dom';
let lastState;//上一个状态
function useState(initialState){
  lastState = lastState||initialState;
  function setState(newState){
    lastState = newState;
    render();//每次调用setState就会重新刷新和渲染组件
  }
  return [lastState,setState];
}
function Counter(){
  let [number,setNumber] = useState(0);
  return (
    <div>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>+</button>
    </div>
  )
}
function render(){
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}
render();