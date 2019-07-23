import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Lists from '../Lists/Lists';
const projectDetails = (props) => (
    <Aux>
      <Lists deleteClicked={props.deleteClicked} newListClicked={props.newListClicked} project={props.project}></Lists>
    </Aux>
);

export default projectDetails;