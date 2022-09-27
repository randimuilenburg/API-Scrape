// import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  let [spaceships, setSpaceships] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/vehicles")
      .then((response) => response.json())
      .then((data) => setSpaceships(data.results));
  }, []);

  const NextPage = () => {
    useEffect(() => {
      fetch("https://swapi.dev/api/vehicles/next")
        .then((response) => response.json())
        .then((data) => setSpaceships(data.results));
    }, []);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <Card.Body>
            {spaceships.map((spaceship) => (
              <p>{spaceship.name}</p>
            ))}
          </Card.Body>
        </Card>
        <Button
          className="nextButton"
          variant="warning"
          size="medium"
          onClick={NextPage}
        >
          <p>Next</p>
        </Button>
      </header>
    </div>
  );
}

export default App;
