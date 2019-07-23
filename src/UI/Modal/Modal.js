import Modal from 'react-bootstrap/Modal';
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.header}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {props.form}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <ButtonToolbar>
        <Button variant="info" onClick={() => setModalShow(true)}>
          {props.children}
        </Button>
  
        <MyModal
          show={modalShow}
          header={props.header}
          onHide={() => setModalShow(false)}
          form = {props.form}
        >{props.children}</MyModal>
      </ButtonToolbar>
    );
  }


  export default App;