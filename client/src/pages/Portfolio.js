import React, { Component } from "react";
import {Container, Row, Col} from "../components/Grid";
import ProjectCard from "../components/ProjectCard"
import API from "../utils/API";

class Portfolio extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        API.getProjects().then(res => (this.setState({projects: res.data})))
        .catch(err => console.log(err));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12">
                        <div className="card">
                            <div className="card-header">
                                <h1>Portfolio</h1>
                                <h4>Heroku apps may take a minute to load, please be patient</h4>
                            </div>
                            <div className="card-body">
                                <Row>
                                    {this.state.projects.map(project => (
                                        <ProjectCard 
                                            key={project._id}
                                            title={project.title}
                                            link={project.link}
                                            img={project.imageLink}
                                            alt={project.alt}
                                        />
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    };
}

export default Portfolio;