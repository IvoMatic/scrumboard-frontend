import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import List from '../List/List';
import Modal from '../../UI/Modal/Modal';
import NewColumnForm from '../../Forms/NewColumnForm/NewColumnForm';

const lists = (props) => {
    console.log("WAS"+props.project);
    const listList = Object.keys(props.project.columns).map(v=>{
        console.log(v);
        return <List deleteClicked={props.deleteClicked} key={v} column={props.project.columns[v]}></List>
    });

    const form = (
        <NewColumnForm projectID={props.project.id}></NewColumnForm>
    );

    return(
            <div><CardGroup>{listList}<Modal header="Create a new column" form={form} projectID={props.project.id} newListClicked={props.newListClicked}>+ Column</Modal></CardGroup></div>
    );
};

export default lists;