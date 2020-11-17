import  { useState, useEffect } from 'react';

//⾃定义hook，命名必须以use开头
export default function useClock() {
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
  return date.toLocaleTimeString();
}
