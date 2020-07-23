import React, {useState} from 'react';
import {Button, Input} from 'antd';
import {GetData} from '../services/api/testGetData';
import _ from 'lodash';

let array: any = [1];
let other: any = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]

// const loginBtn = () => {
//     console.log('登录');
// };
function Empty() {
  const [val, setVal] = useState('');
  const dddd = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  const getDaTA = () => {
    const param = {};
    GetData(param).then((res: any) => {
      console.log(res);
    });
  };
  return (
    <div className="Empty">
      <h2>我是错误页面</h2>
      <Button onClick={getDaTA}>发请求</Button>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <br />
    </div>
  );
}

export default Empty;
