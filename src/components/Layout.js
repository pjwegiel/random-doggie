import React, {Component} from 'react';

import Aux from '../hoc/Aux';
import Navbar from './navbar';
import Body from './Body';

class Layout extends Component {
    render () {
        return (
        <Aux>
            <Navbar></Navbar>
            <Body />
        </Aux>
        )
    }
}

export default Layout;