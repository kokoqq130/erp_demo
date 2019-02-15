/**
 * Created by wangfajing on 2018/12/24.
 */
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';

/* eslint-disable react/jsx-filename-extension */
ReactDom.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
/* eslint-enable react/jsx-filename-extension */
