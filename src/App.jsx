/**
 * Created by wangfajing on 2018/12/24.
 */
import React, { Component } from 'react';
import './style/common.css';
import TransferTest from './TransferTest';

class App extends Component {
    render() {
        console.info(data.aaa);
        return (
            <div>
                <h2>欢迎使用</h2>
                <TransferTest />
            </div>
        );
    }
}

export default App;
