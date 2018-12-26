/**
 * Created by wangfajing on 2018/12/24.
 */
import React, { Component } from 'react';
import View from '@View';
import './style/common.css';
import Header from '@page/Header/Header';
import TransferTest from './TransferTest';
import Page1 from '@page/Page1';

class App extends View {
    constructor(props) {
        super(props);
        console.info(this.render);
    }
    render() {
        return (
            <div>
                <Header />
                <TransferTest />
                <Page1 />
            </div>
        );
    }
}

export default App;
