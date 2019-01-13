/**
 * Created by wangfajing on 2018/12/24.
 */
import React, { Component } from 'react';
import {Switch,Link,Route,BrowserRouter} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import View from '@View';
import './style/common.css';
import Config from './config/config.json';
import Router from './router/Router';

const { Header, Sider, Content } = Layout;

class App extends View {
    constructor(props) {
        super(props);
        console.info(this.render);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        const { collapsed } = this.state;
        this.setState({
            collapsed: !collapsed,
        });
    };

    genMenu = (menus) => {
        const { collapsed } = this.state;
        console.info(menus);
        return menus.map((item) => {
            return (
                <Menu.Item key={item.key}>
                    <Link className="menu-link" to={item.url}>
                        <Icon type={item.icon} />
                        {!collapsed ? item.name : null}
                    </Link>
                </Menu.Item>
            );
        });
    };

    render() {
        const menus = Config.menus;
        const { collapsed } = this.state;
        return (
            <div>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <div className="logo clearfix">
                            <img src="./static/img/logo.png" alt="logo" title="宝宝记录" />
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['basicInfo']}>
                            {this.genMenu(menus)}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Icon
                                className="trigger"
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />
                            <span className="logo-info">
                                <span>柯灵</span>
                                <span>宝宝de记录</span>
                            </span>
                        </Header>
                        <Content
                            style={{
                                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                            }}
                        >
                            <Router />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
