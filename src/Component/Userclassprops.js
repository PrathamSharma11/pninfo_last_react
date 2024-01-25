import React, { Component } from 'react';

class Userclassprops extends Component {
    render() {
        console.log(this.props);
        return (
           <>
            <h1>class compo </h1>
            <h2>{this.props.name}</h2>
           </>
        );
    }
}

export default Userclassprops;
