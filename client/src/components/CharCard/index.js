import React from "react";
import {Col, Card, Button} from "react-bootstrap";

function CharCard(props) {
    const imgSrc = props.fullChar.portrait
    const name = props.fullChar.name
    const health = props.fullChar.health
    const attack = props.fullChar.attack
    const state = props.state

    return (
        <Col size="md-3">
            <Card>
                <Card.Header>
                    <img src={imgSrc} alt={name} className="float-left mr-3 border rounded" height="175" width="auto"></img>
                </Card.Header>
                <Card.Body>
                    <p><b>Name: </b>{name}</p>
                    <p><b>Health: </b>{health}</p>
                    <p><b>Attack: </b>{attack}</p>
                    {state ? 
                        <Button variant="primary" onClick={() => {props.clickMethod(props.fullChar)}}>
                            {state === "select" ? "Select" : "Attack"}
                        </Button> : null
                    }
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CharCard;