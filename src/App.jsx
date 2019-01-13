/**
 * Created by wangfajing on 2018/12/24.
 */
import React, { Component } from 'react';
import View from '@View';
import Page2 from './page/Page2';
import './style/common.css';

class App extends View {
    constructor(props) {
        super(props);
        console.info(this.render);
    }

    render() {
        return (
            <div>
                <Page2 />
            </div>
        );
    }
}

export default App;
