import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Tasks from '../Tasks/Tasks';
const list = (props) => (

    <Aux>
    
    <Tasks deleteClicked={props.deleteClicked} column={props.column}></Tasks>
    </Aux>
);

export default list;