import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { Progress, Menu, Dropdown, Drawer } from 'antd';

import { LeftOutlined, PlusOutlined, UpOutlined, RightOutlined, PlusCircleOutlined } from '@ant-design/icons';

import TeamReasonKRDetail from './TeamReasonKRDetail';

import '../styles/comps/TeamYearKRDetail.scss';

function TeamYearKRDetail() {
  const history = useHistory();
  const [isExpandKR, setIsExpandKR] = useState(false);
  const [isExpandAll, setIsExpandKRAll] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);

  const choiceAction = (row = { default: '666' }) => {
    return (
      <Menu>
        <Menu.Item onClick={() => editObjective(row)}> 编辑 </Menu.Item>
        <Menu.Item onClick={() => delNewCollapse(row)}> 删除 </Menu.Item>
      </Menu>
    );
  };

  const editObjective = (row) => {
    console.log(row);
  };
  const delNewCollapse = (row) => {
    console.log(row);
  };
  const expandKR = () => {
    setIsExpandKR(!isExpandKR);
  };
  const expandAll = () => {
    console.log('66');
    setIsExpandKRAll(!isExpandAll);
  };

  const openTeamReasonDetail = () => {
    console.log('打开第三层，团队季度KR详情页面');
    setVisibleDrawer(true);
  };

  const onCloseDrawer = () => {
    setVisibleDrawer(false);
  };

  const jumpToMyOKR = (key) => {
    console.log('key:', key);
    history.push('/home/TestEnvTeamOKR2');
  };
  return (
    <div className="TeamYearKRDetailWrap">
      <div className="topNav">
        <div>
          <LeftOutlined onClick={() => jumpToMyOKR('1')} />
          <span className="title">团队年度KR详情</span>
        </div>
      </div>

      <div className="yearRelative">
        <div className="title">
          <div className="subtitle_55">
            <span className="subtitle_third">年度KR21：</span> 测试环境绿灯雷达监测开发工作
          </div>
          <div className=" yearKRTop">年度KR权重</div>
          <div className=" finishTop">完成度</div>
          <div className=" adminTop">负责人</div>
        </div>

        <div className="content">
          <div className="subtitle_55 mr_third">
            <div className="small_fas_15">中心目标：实施平台化战略</div>
            <div className="small_fas_15">团队O1：配合智慧协同平台建设完成测试环境可视化展示</div>
            {/*
            <div className="small_fas_15">
              ----个人O2：配合智慧协同平台，完成绿灯雷达的相关开发工作
            </div>
            <div className="small_fas_15">
              团队年度KR1：根据测试环境绿灯雷达监测，展示测试环境作战地图上各组件的应用健康检查情况
            </div>
            */}
          </div>
          <div className="yearKRTop">20%</div>
          <div className="finishTop small_finish_15">
            <Progress percent={30} />
          </div>
          <div className="adminTop small_ad_15">张三</div>
        </div>
      </div>

      <div className="reasonKRDetailClaWrap">
        <div className="reasonKRDetailTitle">
          <div className="headOne">季度KR详情</div>
          <span className="headRight" onClick={expandAll}>
            {isExpandAll ? <UpOutlined /> : <RightOutlined />}
          </span>
        </div>

        {/*季度KR详情内容部分*/}
        <div className={classnames({ detailContentWrap: true, detailContentWrapHide: isExpandAll })}>
          {/* 季度标题**起点 */}
          <div className="reasonTitle">
            <div className="headTwo">
              <span className="blueDot"></span> 第一季度KR
            </div>
            <div className="reasonWeight">季度权重:100%</div>
            <div className="reasonFinish">完成度:60%</div>
            <div className="action">
              <Dropdown overlay={choiceAction}>
                <span className="headTwoRight">...</span>
              </Dropdown>

              <span className="headTwoRight" onClick={expandKR}>
                {isExpandKR ? <UpOutlined /> : <RightOutlined />}
              </span>
            </div>
          </div>

          {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
          <div className={classnames({ reasonContentShow: true, reasonContentHide: isExpandKR })}>
            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR" onClick={openTeamReasonDetail}>
                <div>
                  <span className="innerTitle">KR1：</span> 完成B类系统组件的绿灯案例纳管
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">详情</div>
            </div>

            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成B类系统组件的绿灯案例纳管
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">详情</div>
            </div>

            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">详情</div>
            </div>

            {/*添加 KR 按钮 , 个人progress进度*/}
            <div className="addKRBtn">
              <PlusOutlined /> 添加KR按钮
            </div>
          </div>

          {/* 以上为完整一个季度的**终点 */}
          {/* 以上为完整一个季度的**终点 */}

          {/* 季度标题**起点 */}
          <div className="reasonTitle">
            <div className="headTwo">
              <span className="blueDot"></span> 第一季度KR
            </div>
            <div className="reasonWeight">季度权重:100%</div>
            <div className="reasonFinish">完成度:60%</div>
            <div className="action">
              <Dropdown overlay={choiceAction}>
                <span className="headTwoRight">...</span>
              </Dropdown>

              <span className="headTwoRight" onClick={expandKR}>
                {isExpandKR ? <UpOutlined /> : <RightOutlined />}
              </span>
            </div>
          </div>

          {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
          <div className={classnames({ reasonContentShow: true, reasonContentHide: isExpandKR })}>
            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR" onClick={openTeamReasonDetail}>
                <div>
                  <span className="innerTitle">KR1：</span> 完成B类系统组件的绿灯案例纳管
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">详情</div>
            </div>

            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成B类系统组件的绿灯案例纳管
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">详情</div>
            </div>

            {/* 每一个KR*/}
            <div className="KRContentWrap">
              <div className="KR">
                <div>
                  <span className="innerTitle">KR1：</span> 完成方案设计及实施计划制定
                </div>
              </div>
              <div className="small_15">50%</div>
              <div className="small_15">
                <Progress percent={30} />
              </div>
              <div className="none_word">详情</div>
            </div>

            {/*添加 KR 按钮 , 个人progress进度*/}
            <div className="addKRBtn">
              <PlusOutlined /> 添加KR按钮
            </div>
          </div>

          {/* 以上为完整一个季度的**终点 */}
          {/* 以上为完整一个季度的**终点 */}

          {/* 添加季度KR按钮 */}
          <div className="addObjBtnWrap">
            <PlusCircleOutlined />
            <span className="KRword">添加季度KR</span>
          </div>
        </div>
      </div>

      {/* 个人年度KR与团队年度KR关联关系 */}
      <div className="personTeamYearKRConnectClaWrap">
        <div className="reasonKRDetailTitle">
          <div className="headOne">个人年度KR与团队年度KR关联关系</div>
          <span className="headRight" onClick={expandAll}>
            {isExpandAll ? <UpOutlined /> : <RightOutlined />}
          </span>
        </div>

        {/*季度KR详情内容部分*/}
        <div className={classnames({ detailContentWrap: true, detailContentWrapHide: isExpandAll })}>
          {/* 季度标题**起点 */}
          <div className="reasonTitle">
            <div className="headTwo">
              <span className="blueDot"></span> 小明
            </div>
            <div className="reasonWeight"></div>
            <div className="reasonFinish"></div>
            <div className="action">
              <span className="headTwoRight" onClick={expandKR}>
                {isExpandKR ? <UpOutlined /> : <RightOutlined />}
              </span>
            </div>
          </div>

          {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
          <div className={classnames({ reasonContentConnectShow: true, reasonContentHide: isExpandKR })}>
            {/* 每一个KR*/}
            <div className="KRContentWrap">
              {/* 循环起点***起点 */}
              {/* 一个人一个标题一个内容****分为一组***标题 */}
              <div className="PersonYearKRTitle">
                <div className="KR" onClick={openTeamReasonDetail}>
                  <div>
                    <span className="innerTitle">个人年度KR1:</span> 根据智慧协同品平台的实际要求，按时完成测试环境可视化的各项工作
                  </div>
                </div>
                <div className="small_15"></div>
                <div className="small_15">完成度</div>
                <div className="none_word"></div>
              </div>
              {/*  一个人一个标题一个内容****分为一组***内容 */}
              <div className="PersonYearKRContent">
                <div className="personODesc">
                  <div>
                    <span className="innerTitle"></span> 完成方案设计及实施计划制定666
                  </div>
                </div>
                <div className="small_15"> &nbsp;</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">&nbsp;</div>
              </div>
              {/* 循环终点***终点 */}

              {/* 循环起点***起点 */}
              {/* 一个人一个标题一个内容****分为一组***标题 */}
              <div className="PersonYearKRTitle">
                <div className="KR" onClick={openTeamReasonDetail}>
                  <div>
                    <span className="innerTitle">个人年度KR2:</span> 根据智慧协同品平台的实际要求，按时完成测试环境可视化的各项工作
                  </div>
                </div>
                <div className="small_15">&nbsp;</div>
                <div className="small_15">完成度</div>
                <div className="none_word"></div>
              </div>
              {/*  一个人一个标题一个内容****分为一组***内容 */}
              <div className="PersonYearKRContent">
                <div className="personODesc">
                  <div>
                    <span className="innerTitle"></span> 完成方案设计及实施计划制定666
                  </div>
                </div>
                <div className="small_15"> &nbsp;</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">&nbsp;</div>
              </div>
              {/* 循环终点***终点 */}
            </div>
          </div>

          {/* 以上为完整一个季度的**终点 */}
          {/* 以上为完整一个季度的**终点 */}

          {/* 季度标题**起点 */}
          <div className="reasonTitle">
            <div className="headTwo">
              <span className="blueDot"></span> 小强
            </div>
            <div className="reasonWeight"></div>
            <div className="reasonFinish"></div>
            <div className="action">
              <span className="headTwoRight" onClick={expandKR}>
                {isExpandKR ? <UpOutlined /> : <RightOutlined />}
              </span>
            </div>
          </div>

          {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
          <div className={classnames({ reasonContentConnectShow: true, reasonContentHide: isExpandKR })}>
            {/* 每一个KR*/}
            <div className="KRContentWrap">
              {/* 循环起点***起点 */}
              {/* 一个人一个标题一个内容****分为一组***标题 */}
              <div className="PersonYearKRTitle">
                <div className="KR" onClick={openTeamReasonDetail}>
                  <div>
                    <span className="innerTitle">个人年度KR1:</span> 根据智慧协同品平台的实际要求，按时完成测试环境可视化的各项工作
                  </div>
                </div>
                <div className="small_15"></div>
                <div className="small_15">完成度</div>
                <div className="none_word"></div>
              </div>
              {/*  一个人一个标题一个内容****分为一组***内容 */}
              <div className="PersonYearKRContent">
                <div className="personODesc">
                  <div>
                    <span className="innerTitle"></span> 完成方案设计及实施计划制定666
                  </div>
                </div>
                <div className="small_15"> &nbsp;</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">&nbsp;</div>
              </div>
              <div className="PersonYearKRContent">
                <div className="personODesc">
                  <div>
                    <span className="innerTitle"></span> 完成方案设计及实施计划制定666777
                  </div>
                </div>
                <div className="small_15"> &nbsp;</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">&nbsp;</div>
              </div>
              {/* 循环终点***终点 */}

              {/* 循环起点***起点 */}
              {/* 一个人一个标题一个内容****分为一组***标题 */}
              <div className="PersonYearKRTitle">
                <div className="KR" onClick={openTeamReasonDetail}>
                  <div>
                    <span className="innerTitle">个人年度KR2:</span> 根据智慧协同品平台的实际要求，按时完成测试环境可视化的各项工作
                  </div>
                </div>
                <div className="small_15">&nbsp;</div>
                <div className="small_15">完成度</div>
                <div className="none_word"></div>
              </div>
              {/*  一个人一个标题一个内容****分为一组***内容 */}
              <div className="PersonYearKRContent">
                <div className="personODesc">
                  <div>
                    <span className="innerTitle"></span> 完成方案设计及实施计划制定666
                  </div>
                </div>
                <div className="small_15"> &nbsp;</div>
                <div className="small_15">
                  <Progress percent={30} />
                </div>
                <div className="none_word">&nbsp;</div>
              </div>
              {/* 循环终点***终点 */}
            </div>
          </div>

          {/* 以上为完整一个季度的**终点 */}
          {/* 以上为完整一个季度的**终点 */}
        </div>
      </div>

      {/*最底下放置 第三层页面 ==> 团队季度KR详情页面*/}
      <Drawer title="团队季度KR详情" placement="right" width={'85%'} closable={false} onClose={onCloseDrawer} visible={visibleDrawer}>
        <TeamReasonKRDetail></TeamReasonKRDetail>
      </Drawer>
    </div>
  );
}

export default TeamYearKRDetail;
