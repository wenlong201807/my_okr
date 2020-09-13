import React, { useState } from 'react';
import { Cascader, Input } from 'antd';
import { initCascaderArr } from '../mock/test';

function Test() {
  const [val, setVal] = useState('');
  const [cascaderArr] = useState(initCascaderArr);
  const dddd = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  };

  const onChangeCascaderArr = (value, originArr) => {
    console.log(value, originArr);
  };
  // const displayRender = (label) => {
  //     return label[label.length - 1];
  // }

  return (
    <div className="Test">
      <h2>我是测试页面</h2>
      <Input placeholder="1" value={val} style={{ width: '200px' }} onChange={(e) => dddd(e)} />
      <Cascader
        options={cascaderArr}
        defaultValue={
          ['hangzhouCode']
          // 默认值使用code，但是页面显示对应的name
          // ["zhejiangCode", "hangzhouCode"] // 默认值使用code，但是页面显示对应的name
        }
        fieldNames={{
          label: 'name',
          value: 'code',
          children: 'items',
        }}
        onChange={onChangeCascaderArr}
        // expandTrigger="hover"
        // displayRender={displayRender}
        style={{ width: '60%' }}
        changeOnSelect
        // size="small"
        placeholder="Please select"
      />
      <br />
    </div>
  );
}

export default Test;
