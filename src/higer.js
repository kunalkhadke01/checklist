import React, { Component } from 'react';

const listname = (viewcomp) => {
    class mycomp extends Component {
        render() {
            return <viewcomp name="kunal" />
        }
    }
    return mycomp
};

export default listname;