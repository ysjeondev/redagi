import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    input = React.createRef();
    
    handleFocus = () => {
        this.input.current.focus();
    }

    render(){
        return(
            <div>
                <input ref={this.input} />
                
            </div>
        )
    }
}

export default ValidationSample;
