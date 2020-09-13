import React from 'react';
import ReactDOM from 'react-dom';
//useState是useReducer的语法糖
let hookStates = [];//保存状态的数组 [0,0]
let hookIndex = 0;//索引
/* function useState(initialState){
   hookStates[hookIndex] = hookStates[hookIndex]||initialState;
   let currentIndex = hookIndex;
   function setState(newState){
     hookStates[currentIndex]=newState;
     render();
   }
   return [hookStates[hookIndex++],setState];
} */
function useReducer(reducer,initialState){
  hookStates[hookIndex] = hookStates[hookIndex]||initialState;
  let currentIndex = hookIndex;
  function dispatch(action){
    hookStates[currentIndex] = reducer?reducer(hookStates[currentIndex],action):action;
    render();
  }
  return [hookStates[hookIndex++],dispatch];
}
function useState(initialState){
  return useReducer(null,initialState);
}
function counterReducer(state,action){
   switch(action.type){
     case 'add':
       return state+1;
     default:
       return state;  
   }
}
function Counter1(){
  let [number,setNumber] = useState(0);
  return (
    <div>
      <p>{number}</p>
      <button onClick={()=>setNumber(number+1)}>+</button>
    </div>
  )
}
function Counter2(){
  //reducer 初始状态
  let [state,dispatch] = useReducer(counterReducer,0);
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>dispatch({type:'add'})}>+</button>
    </div>
  )
}
function render(){
  hookIndex=0;
  ReactDOM.render(
    <div><Counter1/><hr/><Counter2/></div>,
    document.getElementById('root')
  );
}
render();