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
            <div
                className={`alert alert-warning alert-dismissible fade p-4 h6 m-0 text-center ${
                    enabled ? 'show' : 'd-none'
                }`}
            >
                {children}
            </div>
        );
    }
}
