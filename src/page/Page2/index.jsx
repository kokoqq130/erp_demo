/**
 * Created by wcq on 2018/12/26.
 */
import React, { Component } from 'react';
import View from '@View';
import hocTest from '../HocTest';

class Page2 extends Component {
    render() {
        return <div>
            页面2
        </div>
    }
}

export default hocTest(Page2);