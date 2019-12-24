import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
    state={
        modal: false,
        message : ""
    }

toggle = () => {
  let modal = 'modal';
  this.setState({
    [modal]: !this.state[modal]
  });
}

render() {
  return (
      <MDBContainer>
        <MDBBtn color="secondary" onClick={this.toggle()}>Top right</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle()} side position="top-right">
          <MDBModalHeader toggle={this.toggle()}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            {this.state.message}
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle()}>Close</MDBBtn>
            {/* <MDBBtn color="primary">Save changes</MDBBtn> */}
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;