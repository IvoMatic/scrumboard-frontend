import React from 'react';
import Aux from '../../hoc/Auxiliary';
import ProjectOverview from '../ProjectOverview/ProjectOverview';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const currentProject = (props) => (
    <Aux>
    {props.project ? <ProjectOverview project={props.project}></ProjectOverview> : null}
    {props.project ? <ProjectDetails newListClicked={props.newListClicked} deleteClicked={props.deleteClicked} project={props.project}></ProjectDetails> : null}
    </Aux>
);

export default currentProject;