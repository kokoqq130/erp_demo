/**
 * Created by wangfajing on 2018/12/24.
 */
import React, { Component } from 'react';

class App extends Component {
    render() {
        console.info(this.props.aaa.b)
        return (
            <div>
                <h2>欢迎使用</h2>
            </div>
        );
    }
}

export default App;
