import React, { Component}  from "react";
import {Container} from "react-bootstrap";
import CharSelect from "../components/CharSelect";
import GameScreen from "../components/GameScreen";
import API from "../utils/API";

class Game extends Component{
    state = {
        character: undefined,
        charOpts: [],
        enemies: [],
        environment: ""
    };

    componentWillMount() {
        API.getChars().then(dbRes => {this.setState({charOpts: dbRes.data})})
    }

    selectChar(char) {
        API.getEnemies().then(dbRes => {this.setState({
            enemies: dbRes.data,
            character: char
        })})
    }

    render() {
        return(
            <Container>
                {
                    this.state.character === undefined ? 
                    <CharSelect options={this.state.charOpts} selectFunc={this.selectChar.bind(this)}/> :
                    <GameScreen character={this.state.character} enemies={this.state.enemies}/>
                }
            </Container>
        );
    }
}

export default Game;