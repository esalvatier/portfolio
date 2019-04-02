import React, { Component}  from "react";
import {Modal, Button, Card, Container, Col, Row} from "react-bootstrap";
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
            <Container className="mt-5">
                <Row>
                    <Col md={{span:12}}>
                        <Card>
                            <Card.Header>
                                Contact Types
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={{span: 6, offset: 2}}>
                                        <Button 
                                            variant="primary" 
                                            value="resume" 
                                            name="Resume Request" 
                                            onClick={this.handleShow}
                                        >
                                            Request Resume
                                        </Button>
                                    </Col>
                                    <Col md={{span: 3}}>
                                        <Button 
                                            variant="primary" 
                                            value="message" 
                                            name="Your Message" 
                                            onClick={this.handleShow}
                                        >
                                            Send me a Message
                                        </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{this.state.title}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {this.state.action === "resume" ? <RequestResume/> : this.state.action === "message" ? <SendMessage/> : "Request Sent"}
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
