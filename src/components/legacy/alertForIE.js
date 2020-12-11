import React, { Component } from 'react';

export default class AlertForIE extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enabled: props.ua.includes('Trident'),
        };
    }

    render() {
        const {
            props: { children },
            state: { enabled },
        } = this;

        return (
            <div style={{display: enabled ? 'block' : 'none'}}>
                {children}
            </div>
        );
    }
}
