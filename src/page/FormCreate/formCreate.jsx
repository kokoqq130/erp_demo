/**
 * Created by wcq on 2018/12/26.
 */
import React, { Component } from 'react';

const formCreate = (WarpComoonent) => {
    return class extends Component {
        constructor() {
            this.state = {
                fields: {},
            };
        }
        onChange = (key) => {
            return (e) => {
                this.setState({
                    fields: {
                        ...this.state.fields,
                        [key]: e.target.value,
                    }
                })
            }
        }

        handleSubmit = () => {
            console.log(this.state.fields);
        }

        getField = fieldName => {
            return {
                onChange: this.onChange(fieldName),
            }
        }

        render() {
            const props = {
                ...this.props,
                handleSubmit: this.handleSubmit,
                getFile: this.getFile,
            }
            return <WarpComoonent {...props} />
        }
    }
}

export default formCreate()
