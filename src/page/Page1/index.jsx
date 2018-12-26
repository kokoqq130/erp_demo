/**
 * Created by wcq on 2018/12/26.
 */
import React from 'react';
import View from '@View';
import PageChild from './PageChild';

class Page1 extends View {
    render() {
        return <div>
            页面1
            <PageChild />
        </div>
    }
}

export default Page1;
