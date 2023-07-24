import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StarFill } from 'react-bootstrap-icons';
import { useHistory } from "react-router-dom";

const RatingBarGraph = ({ movie }) => {
    const history = useHistory();

    const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const percentageValues = ratings.map(() => Math.floor(Math.random() * 101));

    const goBack = () => {
        history.goBack();
    };
  
    return (
      <Container>
        <div className="back-button">
        <button onClick={goBack}>Back to Info</button>
        </div>
        <Row>
          <Col md={12}>
            <h1>{movie.title} Ratings</h1>
            <p>FlicSurf Rating: <strong>{movie.rating} <StarFill color="gold" size={20} /></strong></p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {ratings.map((rating, index) => (
              <div key={rating} style={{ marginBottom: "10px" }}>
                <span>{rating} Star</span>
                <div style={{ backgroundColor: "gold", width: `${percentageValues[index]}%`, height: "25px" }}></div>
                <span>{percentageValues[index]}%</span>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default RatingBarGraph;
  