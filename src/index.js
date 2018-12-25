/**
 * Created by wangfajing on 2018/12/24.
 */
import ReactDom from 'react-dom';
import React from 'react';
import App from './App';
import GetError from './component/GetError';

console.info(document.getElementById('app'));
/* eslint-disable react/jsx-filename-extension */
ReactDom.render(<GetError><App /></GetError>, document.getElementById('app'));
/* eslint-enable react/jsx-filename-extension */
