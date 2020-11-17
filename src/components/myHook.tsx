import React, { useState, useEffect } from 'react';
import clockHook from '../myhooks/clockHook'

function MyHook() {
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   console.log('date effect');
  //   //只需要在didMount时候执⾏就可以了
  //   const timer = setInterval(() => {
  //     setDate(new Date());
  //   }, 1000);
  //   //清除定时器，类似willUnmount
  //   return () => clearInterval(timer);
  // }, []);

  useEffect(() => {
    console.log(66);
  }, [count]);

  const add = (num) => {
    let newCount = count + num;
    setCount(newCount);
  };

  return (
    <div className="Test">
      {/* <h2>我是测试页面{count}----{ date.toLocaleTimeString()}</h2> */}
      <h2>自定义的hook使用时----{ clockHook()}</h2>
      {/* <h2>自定义的hook使用时----{ clockHook().toLocaleTimeString()}</h2> */}
      {/* <h2>自定义的hook使用时----{ useClock().toLocaleTimeString()}</h2> */}
      <button onClick={() => add(2)}>+2</button>
    </div>
  );
}

export default MyHook;

//⾃定义hook，命名必须以use开头
function useClock() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log('date effect');
    //只需要在didMount时候执⾏就可以了
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    //清除定时器，类似willUnmount
    return () => clearInterval(timer);
  }, []);
  return date;
}
