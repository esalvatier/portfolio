import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Redirect} from "react-router-dom";
import API from "../../utils/API";


class RequestResume extends Component {
    state = {
        email: "",
        redirect: false
    };

    handleChange = (event) => {
        const {id, value} = event.target;
        this.setState({[id]: value});
    }

    handleSubmit = (event) => {
        let formData = {
            email: this.state.email
        };
        
        API.submitRsmForm(formData)
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
            <Container>
                <Form.Row>
                    <Form.Group style={{width: "75%"}} controlId="email">
                        <Form.Label>
                            Your Email
                        </Form.Label>
                        <Form.Control type="text" onChange={(event) => this.handleChange(event)}>

                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group>
                        <Button variant="primary" type="submit" onClick={(event) => this.handleSubmit(event)}>
                            Request Resume
                        </Button>
                    </Form.Group>
                </Form.Row>
            </Container>
        )
    }
}

export default RequestResume;