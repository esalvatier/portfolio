import React from "react";
import {Col, Card, Button} from "react-bootstrap";

function EnemyCard(props) {
    const imgSrc = props.enemy.portrait
    const name = props.enemy.type
    const health = props.enemy.baseHealth
    const attack = props.enemy.baseAtk
    const id = props.id

    return (
        <Col size="md-3">
            <Card>
                <Card.Header>
                    <img src={imgSrc} alt={name} className="float-left mr-3 border rounded" height="175" width="auto"></img>
                </Card.Header>
                <Card.Body>
                    <p><b>Type: </b>{name}</p>
                    <p><b>Health: </b>{health}</p>
                    <p><b>Counter Attack: </b>{attack}</p>
                    <Button variant="primary" onClick={() => {props.clickMethod(props.char, id)}}>Attack</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default EnemyCard;