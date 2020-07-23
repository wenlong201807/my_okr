import React, {useState, useRef} from 'react';
import {useHistory} from 'react-router-dom';
import classnames from 'classnames';
import {Progress, Menu, Dropdown} from 'antd';
import CommonTitle from "../../components/CommonTitle";

import {
    PlusOutlined,
    UpOutlined,
    RightOutlined,
    FlagOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';


import '../../styles/pages/TeamOKRAdmin.scss';

function TeamOKRAdmin() {
    const history = useHistory();
    const [isExpandKR, setIsExpandKR] = useState(false);


    const childRef = useRef();
    console.log(childRef);
    const getdata = (data) => {
        console.log(data, history);
    };
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


    return (
        <div className="TeamOKRAdminWrap">
            <CommonTitle getDate={getdata}
                cRef={childRef}
                title={"测试环境团队OKR管理"}></CommonTitle>

            <div className="reasonKRDetailClaWrap">

                {/* 每一个大O的标题***第一大**循环起点*** */}
                <div className="reasonKRDetailTitle">
                    <div className="headOne">
                        <span className="flag">
                            <FlagOutlined/></span>
                        <span>实施平台化战略</span>
                    </div>
                    <span className="headRight"></span>
                </div>

                {/*季度KR详情内容部分*/}
                <div className={
                    classnames({detailContentWrap: true, detailContentWrapHide: false})
                }>
                    {/* 季度标题**第二大**循环的起点 */}
                    <div className="reasonTitle">
                        <div className="headTwo">
                            <span className="blueDot">O1:</span>
                            配合智慧协同平台建设完成测试环境可视化展示
                        </div>
                        <div className="reasonWeight">权重:100%</div>
                        <div className="reasonFinish">完成度:60%</div>
                        <div className="reasonAdmin">负责人</div>
                        <div className="action">
                            <Dropdown overlay={choiceAction}>
                                <span className="headTwoDot">...</span>
                            </Dropdown>

                            <span className="headTwoArrow"
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
                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/*添加 KR 按钮 */}
                        <div className="addKRBtn">
                            <PlusOutlined/>
                            添加KR按钮
                        </div>
                    </div>

                    {/* 以上为完整第二循环的**终点 */}
                    {/* 以上为完整第二循环的**终点 */}


                    {/* 季度标题**第二大**循环的起点 */}
                    <div className="reasonTitle">
                        <div className="headTwo">
                            <span className="blueDot">O1:</span>
                            配合智慧协同平台建设完成测试环境可视化展示
                        </div>
                        <div className="reasonWeight">权重:100%</div>
                        <div className="reasonFinish">完成度:60%</div>
                        <div className="reasonAdmin">负责人</div>
                        <div className="action">
                            <Dropdown overlay={choiceAction}>
                                <span className="headTwoDot">...</span>
                            </Dropdown>

                            <span className="headTwoArrow"
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
                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/*添加 KR 按钮 */}
                        <div className="addKRBtn">
                            <PlusOutlined/>
                            添加KR按钮
                        </div>
                    </div>

                    {/* 以上为完整第二循环的**终点 */}
                    {/* 以上为完整第二循环的**终点 */}


                    {/* 添加季度Obj按钮**第二循环的**终点的尾巴 */}
                    <div className="addObjBtnWrap">
                        <PlusCircleOutlined/>
                        <span className="KRword">添加Objective</span>
                    </div>
                </div>

                {/* 每一个大O的标题***第一大**循环终点*** */}
                {/* 每一个大O的标题***第一大**循环终点*** */}


                {/* **********第一大循环的另一个*****此处为起点************** */}

                {/* 每一个大O的标题***第一大**循环起点*** */}
                <div className="reasonKRDetailTitle">
                    <div className="headOne">
                        <span className="flag">
                            <FlagOutlined/></span>
                        <span>实施平台化战略</span>
                    </div>
                    <span className="headRight"></span>
                </div>

                {/*季度KR详情内容部分*/}
                <div className={
                    classnames({detailContentWrap: true, detailContentWrapHide: false})
                }>
                    {/* 季度标题**第二大**循环的起点 */}
                    <div className="reasonTitle">
                        <div className="headTwo">
                            <span className="blueDot">O1:</span>
                            配合智慧协同平台建设完成测试环境可视化展示
                        </div>
                        <div className="reasonWeight">权重:100%</div>
                        <div className="reasonFinish">完成度:60%</div>
                        <div className="reasonAdmin">负责人</div>
                        <div className="action">
                            <Dropdown overlay={choiceAction}>
                                <span className="headTwoDot">...</span>
                            </Dropdown>

                            <span className="headTwoArrow"
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
                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/*添加 KR 按钮 */}
                        <div className="addKRBtn">
                            <PlusOutlined/>
                            添加KR按钮
                        </div>
                    </div>

                    {/* 以上为完整第二循环的**终点 */}
                    {/* 以上为完整第二循环的**终点 */}


                    {/* 季度标题**第二大**循环的起点 */}
                    <div className="reasonTitle">
                        <div className="headTwo">
                            <span className="blueDot">O1:</span>
                            配合智慧协同平台建设完成测试环境可视化展示
                        </div>
                        <div className="reasonWeight">权重:100%</div>
                        <div className="reasonFinish">完成度:60%</div>
                        <div className="reasonAdmin">负责人</div>
                        <div className="action">
                            <Dropdown overlay={choiceAction}>
                                <span className="headTwoDot">...</span>
                            </Dropdown>

                            <span className="headTwoArrow"
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
                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/* 每一个KR**第三循环起点*/}
                        <div className="KRContentWrap">
                            <div className="KR">
                                <div>
                                    <span className="innerTitle">KR1：</span>
                                    完成B类系统组件的绿灯案例纳管
                                </div>
                            </div>
                            <div className="small_15">50%</div>
                            <div className="small_15">
                                <Progress percent={30}/>
                            </div>
                            <div className="small_15_admin">张三</div>
                            <div className="none_word">详情</div>
                        </div>

                        {/*添加 KR 按钮 */}
                        <div className="addKRBtn">
                            <PlusOutlined/>
                            添加KR按钮
                        </div>
                    </div>

                    {/* 以上为完整第二循环的**终点 */}
                    {/* 以上为完整第二循环的**终点 */}


                    {/* 添加季度Obj按钮**第二循环的**终点的尾巴 */}
                    <div className="addObjBtnWrap">
                        <PlusCircleOutlined/>
                        <span className="KRword">添加Objective</span>
                    </div>
                </div>

                {/* 每一个大O的标题***第一大**循环终点*** */}
                {/* 每一个大O的标题***第一大**循环终点*** */}
                {/* **********第一大循环的另一个*****此处为终点************** */}
                {/* **********第一大循环的另一个*****此处为终点************** */} </div>


        </div>
    );
}

export default TeamOKRAdmin;
