import React from 'react';

class View extends React.Component {
    constructor() {
        super();
        Object.defineProperty(this, 'render', {
            get: function() {
                return this.render
            },
            set: function(newrender){
                console.info(newrender);
                this.render = newrender;
                return newrender;
            }
        })
    }
    render() {
        return null;
    }
}

export default View;
