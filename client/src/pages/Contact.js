import React from "react";
import {Container, Row, Col} from "../components/Grid";

function Contact() {
    return(
        <Container>
            <Row>
                <Col size="md-12">
                    <div className="card">
                        <div className="card-header">
                            Contact
                        </div>
                        <div className="card-body">
                            <form action="/api/contacts" method="post" enctype="multipart/form-data">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="contactname">Name</label>
                                        <input type="text" className="form-control" name="fullname" id="contactname"></input>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="contactemail">Email</label>
                                        <input type="text" className="form-control" name="email" id="contactemail"></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label for="contactname">Message</label>
                                        <textarea name="message" className="form-control" id="contactmessage"></textarea>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <input type="submit" className="btn"></input>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
