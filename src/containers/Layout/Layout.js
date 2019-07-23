import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Board from '../Board/Board';
import Aux from '../../hoc/Auxiliary';
import { getUser, showProjectDetails, deleteTask, newList, getWeather } from '../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Layout extends Component {

    componentWillMount(){
        this.props.getUser(1);
        this.props.getWeather();
      }

    deleteTaskHandler = (event) => {
        this.props.deleteTask(event);
    }

    showProjectHandler = (event) => {
        this.props.showProjectDetails(event);
    }

    newListHandler = (event) => {
        this.props.newList(event);
    }

    render() {
        console.log(this.props.loggedInUser + 'is the logged in user');
        return (
            <Aux>
                <Navbar></Navbar>
                <Board newListClicked={this.newListHandler} showClicked={this.showProjectHandler} project={this.props.showProject} deleteClicked={this.deleteTaskHandler} user={this.props.loggedInUser}></Board>
            </Aux>
        );
    }
}

Layout.propTypes= {
    posts: PropTypes.object,
    newPost: PropTypes.object
    }

const mapStateToProps = state => ({
    loggedInUser: state.user.loggedInUser,
    showProject: state.user.showProject,
    weather: state.user.weather
    });


export default connect(mapStateToProps, {getUser, showProjectDetails, deleteTask, newList, getWeather})(Layout);