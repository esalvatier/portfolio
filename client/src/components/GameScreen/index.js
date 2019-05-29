import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import CharCard from "../CharCard";
import EnemyCard from "../EnemyCard";

function GameScreen(props) {
    const {character, enemies, atkResolve} = props;
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
                        <EnemyCard
                            key={index}
                            enemy={enemy}
                            char={character}
                            id={index}
                            state={"false"}
                            clickMethod={atkResolve}
                        />
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default GameScreen;