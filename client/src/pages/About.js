import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";
import IMG_6405 from "../assets/images/IMG_6405.jpg";

function About() {
    return (
        <Container marginTop="5">
            <Row>
                <Col size="md-12">
                    <Card>
                        <Card.Header>
                            About
                        </Card.Header>
                        <Card.Body>
                            <img src={IMG_6405} className="float-left mr-3 border rounded" alt="Mark Erik Salvatier" height="133" width="200"></img>
                            <p class="card-text">
                                <p>My name is Mark Erik Salvatier, welcome to my handcrafted portfolio. It was a little furstrating at times to build, but rewarding as well in the end when I had it finished and done well. I'm looking forward to recreating it with Bootstrap which should be easier and more straightforward to do from what I've seen of it so far, though I imagine there'll be frustrations unique to Bootstrap too!</p>
                                <p>I should tell you a little more about myself and what I enjoy doing outside of the boot camp. One of my favorite activities is reading, though in recent years I haven't found as much time for as I did when I was younger; primarily I enjoy Science Fiction novels,though Fantasy is good as well! Some of my favorite books were written by Frank Herbert, especially the entire Dune series. Related to that I also enjoy writing, the same types of stuff s Ilike to read; whodathunk? At the moment in fact I'm in the middle of editing, rewritings(parts), and adding to the second draft of a long form work I've been working for the last couple of years, it is simultaenousy frustrating and invigorating.</p>
                                <p>I am looking to grapple with complicated problems to deliver a better understanding of our world, leveraging back-end technologies like node.js to manipulate data; my background in GIS has taught me the versitility and explanatory power of maps and data when taken together. Whether in a small team or on my own, teasing apart a complex problem by breaking it down into its component parts and determining the best approach for each is always a rush. Taking large disorganized data-sets and sifting through it to find relevant portions and recompiling it into a more condensed and readable format.</p>
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;