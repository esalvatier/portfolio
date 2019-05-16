import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CharCard from "../CharCard";

function GameScreen(props) {
    const {character, enemies} = props;
    return(
        <Container>
            <Row>
                <Col size="md-3">
                    <CharCard
                        key={character._id}
                        fullChar={character}
                    />
                </Col>
                <Col size="md-9">
                    {enemies.map((enemy, index) => (
                        <CharCard
                            key={index}
                            fullChar={enemy}
                            state={"false"}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default GameScreen;