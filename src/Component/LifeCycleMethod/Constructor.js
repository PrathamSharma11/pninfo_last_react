import React, { Component } from 'react';

class Constructor extends Component {
    constructor(){
        super()
        this.state = {
            name: 'sita',
        }

    }
    submit(){
        this.setState({
            name: "RAM"
        })
    }
    render() {
        console.log('render')
        return (
            <>
                <h1>Constructor {this.state.name}</h1>
                <button className='btn btn-info' onClick={()=>this.submit()}>click me</button>
            </>
        );
    }
}

export default Constructor;
