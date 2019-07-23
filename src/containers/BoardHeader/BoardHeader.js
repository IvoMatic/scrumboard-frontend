import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Jumbotron from 'react-bootstrap/Jumbotron';
import currentWeather from '../../weather/currentWeather/currentWeather';


const boardHeader = (props) => {
    const style = {
        backgroundImage: "url(" + currentWeather() +")",
        backgroundSize: "cover"
    };
    return(
       <Aux>
        <Jumbotron style={style}>
            <h1>Hello, {props.user.userName}!</h1>
            <p>
                Here are a few infos about you: <br/>
                First name: <strong>{props.user.firstName}</strong>  <br/>
                Last name: <strong>{props.user.lastName}</strong>  <br/>
                Email address: <strong>{props.user.eMailAddress}</strong>
            </p>
        </Jumbotron>
    </Aux>
    );
    
};

export default boardHeader;