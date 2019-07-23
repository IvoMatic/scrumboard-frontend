import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const projects = (props) => {

        let projectList = <p>loading...</p>;
        if(props.user) {
            projectList = Object.keys(props.user.projects).map(res => {
                console.log(props.user.projects[res].title);
                return <Card key={props.user.projects[res].id}>
            <Card.Body>
                <Card.Title>{props.user.projects[res].title}</Card.Title>
                <Card.Text>
                    {props.user.projects[res].description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Button onClick={props.showClicked} value={res} variant="info">Show project</Button>
            </Card.Footer>
            </Card> ;
            }
        )};
        

        return(
            <CardDeck>{projectList}</CardDeck>
        );
    }

    


export default projects;