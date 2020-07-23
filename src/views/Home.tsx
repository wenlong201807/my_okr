import React, {useState} from 'react';
import {
    // BrowserRouter ,
    HashRouter,
    Route,
    Switch,
    useLocation,
    useHistory
} from 'react-router-dom';
import {Menu} from 'antd';
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons';

import '../styles/reflect/home.scss';
import BaseCenterOKR from './pages/BaseCenterOKR';
import MyOKR from './pages/MyOKR';
import TeamOKRAdmin from './pages/TeamOKRAdmin';
import PanoramicView from './pages/PanoramicView';
import Test from '../components/test';


const {SubMenu} = Menu;

function Home() {
    const history = useHistory();
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState(location.pathname);
    const state = {
        theme: 'light',
        current: currentPath,
        // current: '/home/BaseCenterOKR',
    };

    const [status, setStatus] = useState(state);

    const jumpToTarget = (path) => {
        console.log(path);
        history.push(path);
    };

    const handleClick = (e) => {
        setStatus({theme: 'light', current: e.key});
        setCurrentPath('/login');
    };

    return (
        <div className="home-container">
            <div className="okrTitle">OKR管理</div>
            <div className="home">
                <div className="side">
                    <Menu // theme={status.theme}
                        theme="light"
                        onClick={handleClick}
                        style={
                            {width: 200}
                        }
                        defaultOpenKeys={
                            ['sub5']
                        }
                        selectedKeys={
                            [status.current]
                        }
                        mode="inline">
                        <SubMenu key="sub1"
                            icon={<AppstoreOutlined/>}
                            title="我的OKR">

                            <Menu.Item key="/home/MyOKR">
                                <div onClick={
                                    () => jumpToTarget('/home/MyOKR')
                                }>王伟</div>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2"
                            icon={<AppstoreOutlined/>}
                            title="团队OKR">

                            <Menu.Item key="/home/TeamOKRAdmin">
                                <div onClick={
                                    () => jumpToTarget('/home/TeamOKRAdmin')
                                }>测试环境团队</div>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3"
                            icon={<AppstoreOutlined/>}
                            title="个人OKR管理">
                            <Menu.Item key="5">张利</Menu.Item>
                            <Menu.Item key="6">李雷</Menu.Item>
                            <Menu.Item key="7">张三</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4"
                            icon={<SettingOutlined/>}
                            title="团队OKR考核">
                            <Menu.Item key="/home/PanoramicView">
                                <div onClick={
                                    () => jumpToTarget('/home/PanoramicView')
                                }>考核全景视图</div>
                            </Menu.Item>
                            <Menu.Item key="10">系统组</Menu.Item>
                            <Menu.Item key="11">开发组</Menu.Item>
                            <Menu.Item key="12">网络组</Menu.Item>
                            <Menu.Item key="13">前端</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="/home/BaseCenterOKR">
                            <div onClick={
                                () => jumpToTarget('/home/BaseCenterOKR')
                            }>中心OKR基线</div>
                        </Menu.Item>
                        <Menu.Item key="/home/Test">
                            <div onClick={
                                () => jumpToTarget('/home/Test')
                            }>测试</div>
                        </Menu.Item>

                    </Menu>
                </div>
                <div className="content">
                    {/* <BrowserRouter forceRefresh={true}> */}
                    <HashRouter>
                        <Switch>
                            <Route path="/home/BaseCenterOKR"
                                component={BaseCenterOKR}/>
                            <Route path="/home/MyOKR"
                                component={MyOKR}/>
                            <Route path="/home/TeamOKRAdmin"
                                component={TeamOKRAdmin}/>
                            <Route path="/home/PanoramicView"
                                component={PanoramicView}/>
                            <Route path="/home/Test"
                                component={Test}/>
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        </div>
    );
}

export default Home;
