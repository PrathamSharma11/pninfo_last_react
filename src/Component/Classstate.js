import React, { Component } from 'react';

class Classstate extends Component {
    constructor(){
        super()
        this.setState = {
            name: 'sita',
        }

    }
    submit(){
        this.setState({
            name: "RAM"
        })
    }
    render() {
        return (
            <>
                <h1>class with state</h1>
                <h2>{this.state.name}</h2>
                <button className='btn btn-info' onClick={()=>this.submit()}>click me</button>
            </>
        );
    }
}

export default Classstate;
