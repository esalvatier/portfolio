import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import CharCard from "../CharCard";
import EnemyCard from "../EnemyCard";

function GameScreen(props) {
    const {character, enemies, atkResolve, environment} = props;
    return(
        <Container>
            <Row className="mt-2">
                <Col size="md-6">
                    <CharCard
                        key={character._id}
                        fullChar={character}
                    />
                </Col>
                <Col size="md-6">
                    <Card>
                        <Card.Header>Terrain: {environment.name}</Card.Header>
                        <Card.Body>
                        <img 
                            src={environment.imgSrc} 
                            alt={environment.name} 
                            className="float-left mx-5 mb-2 border rounded" 
                            height="264" 
                            width="auto"
                        ></img>
                        </Card.Body>
                        
                    </Card>
                </Col>
            </Row>
            <Row className="mt-2">
                {enemies.map((enemy, index) => (
                    <EnemyCard
                        key={index}
                        enemy={enemy}
                        char={character}
                        id={index}
                        state={"false"}
                        clickMethod={atkResolve}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default GameScreen;