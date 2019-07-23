import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import BoardHeader from '../BoardHeader/BoardHeader';
import Projects from '../Projects/Projects';
import CurrentProject from '../CurrentProject/CurrentProject';


class Board extends Component {
    render() {
        let output = <p>inside board</p>
        if(this.props.user != null) {
            console.log("HIER" + this.props.user);
            output = <Aux>
            <BoardHeader user={this.props.user}></BoardHeader>
            {this.props.user ? <Projects user={this.props.user} showClicked={this.props.showClicked}/> : null}
            {this.props.project?<CurrentProject newListClicked={this.props.newListClicked} deleteClicked={this.props.deleteClicked} project={this.props.project}></CurrentProject>:null}
                </Aux>
        }
        return (
            output
        );
    }
} 

export default Board;