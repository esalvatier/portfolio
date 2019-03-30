import React, { Component}  from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Container, Row, Col} from "../components/Grid";
import {SendMessage, RequestResume} from "../components/Contact";

class Contact extends Component {

    state = {
        action: "",
        show: false,
        title: ""
    };

    handleClose = () => {
        this.setState({ 
            show: false,
            action: "",
            title: ""
        });
    };
    
    handleShow = event => {
        this.setState({ 
            show: true,
            action: event.target.value,
            title: event.target.name
        });
    };
    componentDidMount = () => {
        if (this.state.action === "") {
            this.setState({show: false})
        }
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            value="resume"
                            name="Resume Request"
                            onClick={this.handleShow}
                        >
                            Request Resume
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-primary" 
                            value="message"
                            name="Your Message"
                            onClick={this.handleShow}
                        >
                            Send me a Message
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.state.action === "resume" ? <RequestResume/> : this.state.action === "message" ? <SendMessage/> : ""}
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        );
    }
}

export default Contact;
