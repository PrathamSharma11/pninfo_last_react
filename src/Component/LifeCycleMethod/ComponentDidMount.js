import React, { Component } from 'react';

class ComponentDidMount extends Component {
    constructor(){
        super()
        this.state = {
            name: 'sita',
        }
        console.log('constructor')

    }
    componentDidMount(){
        console.log('hello compo did mount')
    }
    componentDidUpdate(){
        console.log('compo did update')
    }
    submit(){
        this.setState({
            name : "RAM"
        })
    }
    render() {
        console.log('render')
        return (
            <>
                <h2>constructor{this.state.name}</h2>
                <button className='btn btn-info' onClick={()=>this.submit()}>click me</button>
            </>
        );
    }
}

export default ComponentDidMount;
