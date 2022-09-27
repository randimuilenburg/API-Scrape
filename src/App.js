// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  let [spacecars, setSpacecars] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles")
      .then((response) => response.json())
      .then((data) => setSpacecars(data.results));
  }, []);

  // Goes up to 4 pages
  const NextPage = () => {
    useEffect(() => {
      fetch("https://swapi.dev/api/vehicles/?page=2")
        .then((response) => response.json())
        .then((data) => setSpacecars(data.results));
    }, []);
  };

  const GoBack = () => {
    useEffect(() => {
      fetch("https://swapi.dev/api/vehicles")
        .then((response) => response.json())
        .then((data) => setSpacecars(data.results));
    }, []);
  };

  return (
    // <Container>
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Body>
            {spacecars.map((spacecar) => (
              <p>{spacecar.name}</p>
            ))}
          </Card.Body>
        </Card>
        <Row>
          <Col xs lg="4">
            <Button
              className="backButton"
              variant="warning"
              size="medium"
              onClick={GoBack}
            >
              <p>Back</p>
            </Button>
          </Col>
          <Col xs lg="4">
            <Button
              className="nextButton"
              variant="warning"
              size="medium"
              onClick={NextPage}
            >
              <p>Next</p>
            </Button>
          </Col>
        </Row>
      </header>
    </div>
    /* </Container> */
  );
}

export default App;
