import React from 'react';
import ReactDOM from 'react-dom';
/**
 * 为了减少组件渲染,我们可以优化,设置组件的属性变了才重新渲染,如果没变则不渲染
 * useMemo useCallback
 */

let hookStates = [];//保存状态的数组 [0,0]
let hookIndex = 0;//索引
function useState(initialState){
   hookStates[hookIndex] = hookStates[hookIndex]||initialState;
   let currentIndex = hookIndex;
   function setState(newState){
     hookStates[currentIndex]=newState;
     render();
   }
   return [hookStates[hookIndex++],setState];
}
function useCallback(callback,dependencies){
 if(hookStates[hookIndex]){//说明不是第一次,
    let [lastCallback,lastDependencies] = hookStates[hookIndex];
    //判断一下新的依赖数组中的每一项是否跟上次完全相等
    let same = dependencies.every((item,index)=>item === lastDependencies[index]);
    if(same){
      hookIndex++;
      return lastCallback;
    }else{//只要有一个依赖变量不一样的话
      hookStates[hookIndex++]=[callback,dependencies];//hookIndex=3 callback=()=>setNumber(number+1)  dependencies=[0]
      return callback;
    }
 }else{//说明是第一次渲染
  hookStates[hookIndex++]=[callback,dependencies];//hookIndex=3 callback=()=>setNumber(number+1)  dependencies=[0]
  return callback;
 }
}
function useMemo(factory,dependencies){
  if(hookStates[hookIndex]){//说明不是第一次,
     let [lastMemo,lastDependencies] = hookStates[hookIndex];
     //判断一下新的依赖数组中的每一项是否跟上次完全相等
     let same = dependencies.every((item,index)=>item === lastDependencies[index]);
     if(same){
       hookIndex++;
       return lastMemo;
     }else{//只要有一个依赖变量不一样的话
      let newMemo= factory();
      hookStates[hookIndex++]=[newMemo,dependencies];
      return newMemo;
     }
  }else{//说明是第一次渲染
    let newMemo= factory();
      hookStates[hookIndex++]=[newMemo,dependencies];
      return newMemo;
  }
 }
let Child = ({data,onButtonClick})=>{
   console.log('Child render');
   return <button onClick={onButtonClick}>{data.number}</button>
}
/* function memo(OldFunctionComponent){
  return class extends React.PureComponent{
    render(){
      return <OldFunctionComponent {...this.props}/>
    }
  }
} */
Child = React.memo(Child);//useMemo和memo没有一点关系
function App(){
  const [number,setNumber] = useState(0);
  const [name,setName] =useState("zhufeng");
  //每次渲染App都要声明一个新对象 1参数是生成对象的工厂 依赖的变量
  let data = useMemo(()=>({number}),[number]);
   //每次渲染App都要声明一个新的函数,进行优化,依赖变量发生改变的话才会重新执行得到函数,否则始终用上次的函数
  let addClick = useCallback(()=>setNumber(number+1),[number]);
  return (
  <div>
    <input value={name} onChange={e=>setName(e.target.value)}/>
    <Child data={data} onButtonClick={addClick}/>
  </div>
  )
}

function render(){
  hookIndex=0;
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
}
render();