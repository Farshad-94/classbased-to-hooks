import React, { Component } from 'react';

export default class LoadingSpinner extends Component {
    render() {
        return (
                <div className='ui active dimmer'>
                    <div className='ui large text loader'>
                        {this.props.message}
                    </div>
                </div>
        )
    }
}

LoadingSpinner.defaultProps = {
    message: 'Loading...'
};