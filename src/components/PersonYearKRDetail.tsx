import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../styles/comps/PersonYearKRDetail.scss';
import classnames from 'classnames';
import {Progress, Input, Menu, Dropdown} from 'antd';
import {
    LeftOutlined,
    CloseOutlined,
    PlusOutlined,
    UpOutlined,
    RightOutlined
} from '@ant-design/icons';
const {TextArea} = Input;

function PersonYearKRDetail() {
    const history = useHistory();
    const [isExpandKR, setIsExpandKR] = useState(false);
    const [isExpandAll, setIsExpandKRAll] = useState(false);

    const choiceAction = (row = {
        default: '666'
    }) => {
        return (
            <Menu>
                <Menu.Item onClick={
                    () => editObjective(row)
                }>
                    编辑
                </Menu.Item>
                <Menu.Item onClick={
                    () => delNewCollapse(row)
                }>
                    删除
                </Menu.Item>
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
    const backToPersonKR = () => {
        history.push('/home/TestEnvTeamOKR');
    };
    const jumpToMyOKR = (key) => {
        console.log('key:', key);
        history.push('/home/MyOKR');
    };
    return (
        <div className="PersonYearKRDetailWrap">
            <div className="topNav">
                <div>
                    <LeftOutlined onClick={
                        () => jumpToMyOKR('1')
                    }/>
                    <span className="title">个人年度KR详情</span>
                </div>
                <div onClick={backToPersonKR}>
                    <CloseOutlined/>
                </div>
            </div>

            <div className="yearRelativePYKRD">
                <div className="title">
                    <div className="subtitle_55">
                        <span className="subtitle_third">年度KR2：</span>
                        测试环境绿灯雷达监测开发工作
                    </div>
                    <div className=" yearKRTop">年度KR权重</div>
                    <div className=" finishTop">完成度</div>
                    <div className=" adminTop">负责人</div>
                </div>

                <div className="content">
                    <div className="subtitle_55 mr_third">
                        <div className="small_fas_15">中心目标：实施平台化战略</div>
                        <div className="small_fas_15">团队O1：配合智慧协同平台建设完成测试环境可视化展示</div>
                        <div className="small_fas_15">----个人O2：配合智慧协同平台，完成绿灯雷达的相关开发工作</div>
                        <div className="small_fas_15">团队年度KR1：根据测试环境绿灯雷达监测，展示测试环境作战地图上各组件的应用健康检查情况</div>
                    </div>
                    <div className="yearKRTop">20%</div>
                    <div className="finishTop small_finish_15">
                        <Progress percent={30}/>
                    </div>
                    <div className="adminTop small_ad_15">张三</div>
                </div>
            </div>

            <div className="reasonKRDetailPYKRDWrap">
                {/* <div className="reasonKRDetailClaWrap"> */}
                <div className="reasonKRDetailTitle">
                    <div className="headOne">季度KR详情</div>
                    <span className="headRight"
                        onClick={expandAll}>
                        {
                        isExpandAll ? <UpOutlined/>: <RightOutlined/>
                    } </span>
                </div>

                {/*季度KR详情内容部分*/}
                <div className={
                    classnames({detailContentWrap: true, detailContentWrapHide: isExpandAll})
                }>
                    {/* 季度标题**起点 */}
                    <div className="reasonTitle">
                        <div className="headTwo">
                            <span className="blueDot"></span>
                            第一季度KR
                        </div>
                        <div className="reasonWeight">季度权重:100%</div>
                        <div className="reasonFinish">完成度:60%</div>
                        <div className="action">
                            <Dropdown overlay={choiceAction}>
                                <span className="headTwoRight">...</span>
                            </Dropdown>

                            <span className="headTwoRightArrow"
                                onClick={expandKR}>
                                {
                                isExpandKR ? <UpOutlined/>: <RightOutlined/>
                            } </span>
                        </div>
                    </div>

                    {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
                    <div className={
                        classnames({reasonContentShow: true, reasonContentHide: isExpandKR})
                    }>
                        {/* 每一个KR*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成方案设计及实施计划制定
                                </div>
                                <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="none_word"></div>
                        </div>

                        {/* 每一个KR*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成方案设计及实施计划制定
                                </div>
                                <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="none_word"></div>
                        </div>

                        {/*添加 KR 按钮 , 个人progress进度*/}
                        <div className="addKRBtn">
                            <PlusOutlined/>
                            添加KR按钮
                        </div>
                        <div className="descTitle">个人progress进度：</div>
                        <div className="processInput">
                            <TextArea rows={2}/>
                        </div>
                    </div>

                    {/* 以上为完整一个季度的**终点 */}
                    {/* 以上为完整一个季度的**终点 */}

                    {/* 季度标题**起点 */}
                    <div className="reasonTitle">
                        <div className="headTwo">
                            <span className="blueDot"></span>
                            第一季度KR
                        </div>
                        <div className="reasonWeight">季度权重:100%</div>
                        <div className="reasonFinish">完成度:60%</div>
                        <div className="action">
                            <Dropdown overlay={choiceAction}>
                                <span className="headTwoRight">...</span>
                            </Dropdown>

                            <span className="headTwoRightArrow"
                                onClick={expandKR}>
                                {
                                isExpandKR ? <UpOutlined/>: <RightOutlined/>
                            } </span>
                        </div>
                    </div>

                    {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
                    <div className={
                        classnames({reasonContentShow: true, reasonContentHide: isExpandKR})
                    }>
                        {/* 每一个KR*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成方案设计及实施计划制定
                                </div>
                                <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="none_word"></div>
                        </div>

                        {/* 每一个KR*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成方案设计及实施计划制定
                                </div>
                                <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="none_word"></div>
                        </div>

                        {/*添加 KR 按钮 , 个人progress进度*/}
                        <div className="addKRBtn">
                            <PlusOutlined/>
                            添加KR按钮
                        </div>
                        <div className="descTitle">个人progress进度：</div>
                        <div className="processInput">
                            <TextArea rows={2}/>
                        </div>
                    </div>

                    {/* 以上为完整一个季度的**终点 */}
                    {/* 以上为完整一个季度的**终点 */}

                    {/* 季度标题**起点 */}
                    <div className="reasonTitle">
                        <div className="headTwo">
                            <span className="blueDot"></span>
                            第一季度KR
                        </div>
                        <div className="reasonWeight">季度权重:100%</div>
                        <div className="reasonFinish">完成度:60%</div>
                        <div className="action">
                            <Dropdown overlay={choiceAction}>
                                <span className="headTwoRight">...</span>
                            </Dropdown>

                            <span className="headTwoRightArrow"
                                onClick={expandKR}>
                                {
                                isExpandKR ? <UpOutlined/>: <RightOutlined/>
                            } </span>
                        </div>
                    </div>

                    {/* 每一个季度的KR  ***可展开收起的部分 **通过添加，删除样式控制 className={{'reasonContentShow':true reasonContentHide:false}}*/}
                    <div className={
                        classnames({reasonContentShow: true, reasonContentHide: isExpandKR})
                    }>
                        {/* 每一个KR*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成方案设计及实施计划制定
                                </div>
                                <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="none_word"></div>
                        </div>

                        {/* 每一个KR*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成方案设计及实施计划制定
                                </div>
                                <div className="connectTeam">团队季度KR1：配合智慧协同平台建设完成测试环境可视化展示</div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="none_word"></div>
                        </div>

                        {/*添加 KR 按钮 , 个人progress进度*/}
                        <div className="addKRBtn">
                            <PlusOutlined/>
                            添加KR按钮
                        </div>
                        <div className="descTitle">个人progress进度：</div>
                        <div className="processInput">
                            <TextArea rows={2}/>
                        </div>
                    </div>

                    {/* 以上为完整一个季度的**终点 */}
                    {/* 以上为完整一个季度的**终点 */} </div>
            </div>
        </div>
    );
}

export default PersonYearKRDetail;
