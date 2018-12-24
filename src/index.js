/**
 * Created by wangfajing on 2018/12/24.
 */
import ReactDom from 'react-dom';
import React from 'react';
import App from './App';

console.info(document.getElementById('app'));
/* eslint-disable react/jsx-filename-extension */
ReactDom.render(<App />, document.getElementById('app'));
/* eslint-enable react/jsx-filename-extension */
