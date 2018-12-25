import React from 'react';
import PropTypes from 'prop-types';

class GetError extends React.Component {
    static propTypes={
        children: PropTypes.object,
    };

    static defaultProps = {
        children: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            error: '',
        };
    }

    componentDidCatch(errorString, errorInfo) {
        console.info(errorInfo);
        console.info(errorString);
        this.setState({
            error: errorString,
        });
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;
        console.info(error);
        if (error) {
            return (<div>
                Error:
                {error}
            </div>);
        }
        return children;
    }
}

export default GetError;
