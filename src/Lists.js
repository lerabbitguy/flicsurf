import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieContext } from "./MovieContext";

const Lists = () => {
  const { alreadyWatched, wantToWatch } = useContext(MovieContext);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Already Watched List</h2>
          <ul>
            {alreadyWatched?.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </Col>
        <Col>
          <h2>Want to Watch List</h2>
          <ul>
            {wantToWatch?.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Lists;