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
        environment: {type: "any"},
        gameLost: false
    };

    componentWillMount() {
        API.getChars().then(dbRes => {this.setState({charOpts: dbRes.data})})
    }

    selectChar(char) {
        API.getEnemies().then(dbRes => {this.setState({
            enemies: dbRes.data,
            character: char
        })})
        this.getEnv();
    }

    getEnv() {
        const connect = this.state.environment
        API.getEnv(connect).then(dbRes => {
            this.setState({
                environment: dbRes.data[0]
            })
        })
    }

    lostOrWon(character) {
        if (character.health <= 0) {
            this.setState({
                gameLost: true
            })
        }
    }

    fight(char, index) {
        this.lostOrWon(char);
        const enemyList = this.state.enemies
        enemyList[index].baseHealth = enemyList[index].baseHealth - char.attack
        if (enemyList[index].baseHealth > 0) {
            char.health = char.health - enemyList[index].baseAtk
            this.lostOrWon(char);
        } else {
            enemyList.splice(index, 1)
        }
        this.setState({
            character: char,
            enemies: enemyList
        })

    }

    render() {
        console.log(this.state)
        return(
            <Container>
                {
                    this.state.character === undefined ? 
                    <CharSelect options={this.state.charOpts} selectFunc={this.selectChar.bind(this)}/> :
                    <GameScreen character={this.state.character} enemies={this.state.enemies} atkResolve={this.fight.bind(this)}/>
                }
            </Container>
        );
    }
}

export default Game;