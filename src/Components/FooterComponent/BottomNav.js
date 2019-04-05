import React, {Component} from 'react';
import Radium from 'radium';
import {Form, Input, Button, /*FormText,*/ Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';


class Footer extends Component{
  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
      return(
          <div className='fixed-bottom'>
            <h3 >Created by <a  href="https://twitter.com/j__gipson" target="blank">justisGipson</a> -- 2019  <Button className="btn" size="lg" onClick={this.toggle}></Button></h3>
            <div>
              <Modal isOpen={this.state.isOpen} toggle={this.toggle} centered={true}>
                <ModalHeader>Contact for bugs you find, issues you have, or just to say it's rad.</ModalHeader>
                <Form action="https://formspree.io/justis710@gmail.com"
                  method="POST" target="blank">
                    <ModalBody>
                      <Input type="email" name="email" placeholder="Email:" required/>
                      <br />
                      <Input type="textarea" name="message" placeholder="Enter your message:" /> 
                    </ModalBody>
                    <ModalFooter>
                      <Button className="btn btn-secondary" size="sm" type="submit" value="send">Submit</Button>
                      <Button className='btn btn-secondary' size='sm' onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                  </Form>
                </Modal>
              </div>
          </div>
      )
  }
}

export default Radium(Footer);