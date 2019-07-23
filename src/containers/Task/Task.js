import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const task = (props) => (
props.task? 
<Card className="p-3">
    <Button onClick={props.deleteClicked} value={props.task.id} variant="danger" style={{position: 'absolute', right: '3%'}}>X</Button>
    <blockquote className="blockquote mb-0 card-body">
      <p>
        {props.task.taskTitle}
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          {props.task.description}
        </small>
      </footer>
    </blockquote>
  </Card>:<p>{props.task}</p>
);

export default task;