import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, DatePicker, Input, Pagination, Select } from 'antd';
import moment from 'moment';
import '../../styles/pages/PanoramicView.scss';

const { Search } = Input;
const { Option } = Select;
const dateFormat = 'YYYY'; // 定义你需要的时间格式
const currentYear = moment().format(dateFormat);

function PanoramicView() {
  const history = useHistory();
  const [val, setVal] = useState('');
  const [dataYear, setDataYear] = useState(currentYear);
  const dddd = (e) => {
    console.log(e.target.value, val);
    setVal(e.target.value);
  };
  console.log(dddd);

  const onChange = (pageNumber) => {
    console.log('Page: ', pageNumber);
  };

  const groupSelChange = (value) => {
    console.log(`groupSelChange ${value}`);
  };
  const reasonSelChange = (value) => {
    console.log(`reasonSelChange ${value}`);
  };
  const levelSelChange = (value) => {
    console.log(`levelSelChange ${value}`);
  };
  const exameSelChange = (value) => {
    console.log(`exameSelChange ${value}`);
  };

  const getDaTA = () => {
    console.log(66);
  };
  const disabledDate = (current) => {
    return current > moment(new Date(String(Number(currentYear) + 1)));
  };
  const yearOnChange = (date, dateString) => {
    console.log(date);
    setDataYear(dateString);
  };

  const jumpToExameDetail = (key) => {
    console.log('key:', key);
    let state = { aa: 66 };
    history.push(`/PersonReasonOKRExame/${key}`, state);
  };

  return (
    <div className="PanoramicViewClaWrap">
      {/* 可公用的标题*/}
      <div className="CommonTitleClaWrap">
        <div className="baseTitle">系统组OKR管理</div>
        <div className="baseRight">
          <div>
            <DatePicker
              allowClear
              defaultValue={moment(dataYear, dateFormat)}
              format={dateFormat}
              // suffixIcon={() => selfYearIcon}
              disabledDate={disabledDate}
              onChange={yearOnChange}
              picker="year"
            />
          </div>
          <div>
            <Button onClick={getDaTA} type="primary">
              导出
            </Button>
          </div>
        </div>
      </div>

      {/* 数据总览 */}
      <div className="dataAssumeClaWrap">
        <div className="dataAssumeCla">
          <div className="subTitleCla">团队负责人</div>
          <div className="subDataCla">刘洋</div>
        </div>
        <div className="dataAssumeCla">
          <div className="subTitleCla">团队成员</div>
          <div className="subDataCla">99个</div>
        </div>
        <div className="dataAssumeCla">
          <div className="subTitleCla">团队考核平均分</div>
          <div className="subDataCla">100分</div>
        </div>
      </div>

      {/*团队成员列表区*/}

      <div className="teamListClaWrap">
        <h2 className="title">团队成员列表</h2>

        <div className="optionGroupBtn">
          <Button type="primary" style={{ width: 100, marginRight: 10 }}>
            添加成员
          </Button>
          <Select defaultValue="lucy1" onChange={groupSelChange} style={{ width: 120, marginRight: 10 }} allowClear>
            <Option value="lucy1">Lucy1</Option>
            <Option value="lucy2">Lucy2</Option>
            <Option value="lucy3">Lucy3</Option>
          </Select>
          <Select defaultValue="lucy2" onChange={reasonSelChange} style={{ width: 120, marginRight: 10 }} allowClear>
            <Option value="lucy1">Lucy1</Option>
            <Option value="lucy2">Lucy2</Option>
            <Option value="lucy3">Lucy3</Option>
          </Select>
          <Select defaultValue="lucy3" onChange={levelSelChange} style={{ width: 120, marginRight: 10 }} allowClear>
            <Option value="lucy1">Lucy1</Option>
            <Option value="lucy2">Lucy2</Option>
            <Option value="lucy3">Lucy3</Option>
          </Select>
          <Select defaultValue="lucy4" onChange={exameSelChange} style={{ width: 120, marginRight: 10 }} allowClear>
            <Option value="lucy1">Lucy1</Option>
            <Option value="lucy2">Lucy2</Option>
            <Option value="lucy3">Lucy3</Option>
            <Option value="lucy4">Lucy4</Option>
          </Select>
          <Search placeholder="input search text" onSearch={(value) => console.log(value)} style={{ width: 200 }} />
        </div>
      </div>

      <div className="tableHead">
        <div className="titleHead">成员名称</div>
        <div className="reasonHead">时间段</div>
        <div className="grayHead">考核状态</div>
        <div className="grayHead">考核等级</div>
        <div className="grayHead">考核得分</div>
        <div className="updateHead">最后修改时间</div>
        <div className="actionHead">操作</div>
      </div>

      <div className="tableContentWrap">
        <div className="tableContent">
          <div className="name">
            <img src="" alt="wu" className="nameImg" />
            <div className="nameContent">
              <span className="upName">小明</span>
              <span className="downName">自评完成度99%</span>
            </div>
          </div>
          <div className="reason">第一季度</div>
          <div className="grayCol">已考核</div>
          <div className="grayCol">一级</div>
          <div className="grayCol">99.5分</div>
          <div className="timeCol">20120-06-16 14:03</div>
          <div className="tableAction">
            <span className="btnAction" onClick={() => jumpToExameDetail('exame')}>
              考核
            </span>
            <span className="btnAction" onClick={() => jumpToExameDetail('detail')}>
              详情
            </span>
          </div>
        </div>

        <div className="tableContent">
          <div className="name">
            <img src="" alt="wu" className="nameImg" />
            <div className="nameContent">
              <span className="upName">小明</span>
              <span className="downName">自评完成度99%</span>
            </div>
          </div>
          <div className="reason">第一季度</div>
          <div className="grayCol">已考核</div>
          <div className="grayCol">一级</div>
          <div className="grayCol">99.5分</div>
          <div className="timeCol">20120-06-16 14:03</div>
          <div className="tableAction">
            <span className="btnAction" onClick={getDaTA}>
              考核
            </span>
            <span className="btnAction">详情</span>
          </div>
        </div>
      </div>

      <div className="pageNavClaWrap">
        <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
        <span className="sigWord">页</span>
      </div>
    </div>
  );
}

export default PanoramicView;
