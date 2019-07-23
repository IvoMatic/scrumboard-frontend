import React from 'react';
import Aux from '../../hoc/Auxiliary';
import Alert from 'react-bootstrap/Alert';

const projectOverview = (props) => (
<Aux><br/>
<Alert variant='info'>Project Title: <strong>{props.project.title}</strong></Alert>
</Aux>
);

export default projectOverview;