import React, { Component } from 'react';
import '../index.css'

class Modal extends Component {

    render() {
        return (
                <div>
                    {this.props.children}
                </div>
        )
    }
}



export default Modal;
