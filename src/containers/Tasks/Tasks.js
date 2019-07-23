import React from 'react';
import Task from '../Task/Task';
import Aux from '../../hoc/Auxiliary';
import Card from 'react-bootstrap/Card';
import Modal from '../../UI/Modal/Modal';
const tasks = (props) => {
    console.log("Task 0: "+props.column.tasks[0]);
    const taskList = Object.keys(props.column.tasks).map(v=>{
        console.log(v);
        return <Task deleteClicked={props.deleteClicked} key={props.column.tasks[v].id} task={props.column.tasks[v]}></Task>
    });
    
    

  return(
      <Aux>
          <Card  style={{ maxWidth: '22rem' }} >
          <strong>{props.column.columnTitle}</strong>
          {taskList}
          <div><Modal header="Create new Task">+</Modal></div>
          </Card>
      </Aux>
  );
};

export default tasks;