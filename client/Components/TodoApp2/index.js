import React from 'react';
import Main from './Main';
import Store from './Main/Store';

import {Provider} from 'react-redux'

export default (props) =>{
    return (
        <Provider store ={Store}>
            <Main />
        </Provider>
    )
    
}