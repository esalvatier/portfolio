import React from "react";
import {Container, Row} from "react-bootstrap";
import CharCard from "../CharCard";

function CharSelect(props) {
    const {options, selectFunc} = props
    return(
        <Container>
            There are {options.length} character(s) available.
            <Row>
                {options.map(character => (
                    <CharCard
                        key={character._id}
                        fullChar={character}
                        clickMethod={selectFunc}
                        state={"select"}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default CharSelect;