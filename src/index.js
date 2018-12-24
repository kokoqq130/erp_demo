/**
 * Created by wangfajing on 2018/12/24.
 */
import ReactDom from 'react-dom';
import React from 'react';
import App from './App.jsx';

console.info(document.getElementById('app'));

ReactDom.render(<App />, document.getElementById('app'));
