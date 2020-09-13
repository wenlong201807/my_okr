import React from 'react';
import ReactDOM from 'react-dom';
let CounterContext = React.createContext();
//CounterContext.Provider CounterContext.Consumer
let hookIndex=0;
function useContext(context){
  return context._currentValue;
}
function Counter(){
  let {state,setState} = useContext(CounterContext);
  return (
    <div>
      <p>{state.number}</p>
      <button onClick={()=>setState({number:state.number+1})}>+</button>
    </div>
  )
}
/* function Counter2(){
  return (
    <CounterContext.Consumer>
      {
        value=>(
          <div>
            <p>{value.state.number}</p>
            <button onClick={()=>value.setState({number:value.state.number+1})}>+</button>
          </div>
        )
      }
    </CounterContext.Consumer>
  )
} */
function App(){
  const [state,setState] = React.useState({number:0});
  return (
    <CounterContext.Provider value={{state,setState}}>
      <Counter/>
    </CounterContext.Provider>
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