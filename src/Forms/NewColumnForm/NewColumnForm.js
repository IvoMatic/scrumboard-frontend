import React, { Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { newList } from '../../actions/actions';
import { connect } from 'react-redux';

class NewColumnForm extends Component {
    state = {
        title: ''
    }

    onChangeHandler = (event) => {
        this.setState({title : event.target.value})
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const payload = {
            columnTitle: this.state.title,
            projectID: this.props.projectID
        }
        this.props.newList(payload);
    }

    render() {
        return(
           <Form onSubmit={this.onSubmitHandler}>
        <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control value={this.state.title} onChange={this.onChangeHandler} type="text" placeholder="Enter title"/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form> 
        );
    }
} 


export default connect(null, { newList })(NewColumnForm);