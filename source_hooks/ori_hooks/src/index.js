import React,{useEffect,useState} from 'react';
import ReactDOM from 'react-dom';
let lastRef;
function useRef(value){
  lastRef = lastRef||{current:value};
  return lastRef;
}
let myLast ;
function Counter() {
  const [count, setCount] = useState(0);
  const latestCount = useRef(count);//{current:null}
  console.log(myLast===latestCount);
  myLast=latestCount
  useEffect(() => {
    latestCount.current = count;
    setTimeout(() => {
      //console.log(`You clicked ${count} times`);
      console.log(`You clicked ${latestCount.current} times`);
    }, 1000);
  });
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>+</button>
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