import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import API from "../../utils/API";


class SendMessage extends Component {
    state = {
        reason: "",
        name: "",
        from: "",
        content: "",
        redirect: false
    };

    handleChange = (event) => {
        const {id, value} = event.target;
        this.setState({[id]: value});
    }

    handleSubmit = (event) => {
        let formData = {
            reason: this.state.reason,
            name: this.state.name,
            from: this.state.from,
            content: this.state.content
        };
        
        API.submitForm(formData)
        .then((res) => {
            if (res.status === 200) {
                this.setState({redirect: true});
            }
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/contact" />
        }
        return (
            <Card>
                <Card.Header>
                    Contact
                </Card.Header>
                <Card.Body>
                    <Form.Row>
                        <Form.Group md="6" controlId="reason">
                            <Form.Label>
                                Purpose for Contacting Me
                            </Form.Label>
                            <Form.Control type="text" onChange={(event) => this.handleChange(event)}>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group md="6" controlId="name">
                            <Form.Label>
                                Your Name
                            </Form.Label>
                            <Form.Control type="text" onChange={(event) => this.handleChange(event)}>

                            </Form.Control>
                        </Form.Group>
                        <Form.Group md="6" controlId="from">
                            <Form.Label>
                                Your Email
                            </Form.Label>
                            <Form.Control type="text" onChange={(event) => this.handleChange(event)}>

                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group md="12" controlId="content">
                            <Form.Label>
                                Message
                            </Form.Label>
                            <Form.Control type="textarea" onChange={(event) => this.handleChange(event)}>

                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Button variant="primary" type="submit" onClick={(event) => this.handleSubmit(event)}>
                                Submit
                            </Button>
                        </Form.Group>
                    </Form.Row>
                </Card.Body>
            </Card>
        )
    }
}

export default SendMessage;