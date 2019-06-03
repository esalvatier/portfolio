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
        environment: {type: "any", name: "unknown", imgSrc: "https://res.cloudinary.com/dsn7oomnm/image/upload/v1557860441/Personal/success-846055_1920.jpg"},
        baseHealth: 0,
        scenesPast: 0
    };

    componentWillMount() {
        API.getChars().then(dbRes => {this.setState({charOpts: dbRes.data})})
    }

    getEns() {
        API.getEnemies().then(dbRes => {this.setState({
            enemies: dbRes.data
        })})
    }

    selectChar(char) {
        this.setState({
            character: char,
            baseHealth: char.health
        });
        this.getEns();
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
        console.log(character)
        let state;
        if (character.health <= 0) {
            state = true;
        } else if (this.state.scenesPast > 5) {
            state = false
        } else {
            state = "cont"
        }
        if (state !=="cont") {
            API.endGame({loss: state}).then(dbRes => {
                console.log(dbRes.data)
                this.setState({
                    environment: dbRes.data,
                    enemies: []
                })
            })
        }
    }

    fight(char, index) {
        let enemyList = this.state.enemies
        enemyList[index].baseHealth = enemyList[index].baseHealth - char.attack
        if (enemyList[index].baseHealth > 0) {
            char.health = char.health - enemyList[index].baseAtk
        } else {
            enemyList.splice(index, 1)
            char.attack += 1
            if (enemyList.length < 1) {
                this.getEns();
                this.getEnv();
                enemyList = this.state.enemies
                char.health = this.state.baseHealth
                const scenes = this.state.scenesPast + 1;
                this.setState({
                    scenesPast: scenes
                })
            }
        }
        this.setState({
            character: char,
            enemies: enemyList
        })

    }

    render() {
        if (this.state.character !== undefined) {
            this.lostOrWon(this.state.character)
        }
        return(
            <Container>
                {
                    this.state.character === undefined ? 
                    <CharSelect options={this.state.charOpts} selectFunc={this.selectChar.bind(this)}/> :
                    <GameScreen 
                        character={this.state.character} 
                        enemies={this.state.enemies} 
                        atkResolve={this.fight.bind(this)}
                        environment={this.state.environment}
                    />
                }
            </Container>
        );
    }
}

export default Game;