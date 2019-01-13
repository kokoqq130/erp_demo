/**
 * Created by wcq on 2018/12/26.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "antd";
import View from '@View';

const simperHoc = (WarpComponent) => {
    console.info('包装了')
    console.info(WarpComponent)
    return class extends Component {
        componentDidMount() {
            console.info(this.instanceComponent);
        }
        render() {
            return (
                <div>
                    <WarpComponent
                        {...this.props}
                        ref={(instanceComponent) => {
                            this.instanceComponent = instanceComponent;
                        }}
                    />
                    <Button
                        onClick={() => {
                            console.info(this.instanceComponent);
                        }}
                    >包装按钮</Button>
                </div>
            )
        }
    };
}


export default simperHoc;
