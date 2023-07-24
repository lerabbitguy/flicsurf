import React, { useContext } from "react";
import { Container, Row, Col, Image, Button, Form } from "react-bootstrap";
import "./MovieInfoPage.css";
import StarRatingButton from './StarRatingButton';
import { StarFill } from 'react-bootstrap-icons';
import ReviewList from './ReviewList';
import { useState, useEffect } from 'react';
import { MovieContext } from "./MovieContext";
import { useHistory } from "react-router-dom";
import AddToListButton from './AddToListButton';


const MovieInfo = ({ movie }) => {
    const history = useHistory();

    const [reviews, setReviews] = useState([
        { title: 'A masterpiece. I have no words.', body: 'lorem ipsum...', author: 'reviewman', id: 1 },
        { title: 'I loved the part where the Big Man showed up.', body: 'lorem ipsum...', author: 'reviewdude', id: 2 },
        { title: 'Awful Movie!', body: 'lorem ipsum...', author: 'reviewbro', id: 3 }
    ]);

    
    const { addToWatched, addToWantToWatch } = useContext(MovieContext);
    const handleAddToList = (listType) => {
      if (listType === "alreadyWatched") {
        addToWatched(movie);
      } else if (listType === "wantToWatch") {
        addToWantToWatch(movie);
      }
      // history.push("/lists");
    };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-info-page">
      <div
        className="banner-container"
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 1)), url(${require(`./posters/${movie.banner}.jpg`)})`,
            height: movie.bannerHeight,
          }}
        ></div>
      <Container>
        <Row className="movie-details">
          <Col md={4}>
            <Image src={require(`./posters/${movie.poster}.jpg`)} rounded className="movie-poster" />
            <div className="rating-section">
              <p>FlicSurf Rating: <strong>{movie.rating} <StarFill color="gold" size={20}/></strong></p>
              <StarRatingButton />
              <br />
            </div>
          </Col>
          <Col md={8}>
            <h1>{movie.title}</h1>
            <p>
              <strong>Year:</strong> {movie.releaseYear}
            </p>
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Length:</strong> {movie.length}
            </p>
            <p>
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p>
              <strong>Maturity Rating:</strong> {movie.maturity}
            </p>
            <p>
              <strong>Description:</strong> {movie.description}
            </p>
            <AddToListButton onAddToList={handleAddToList} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Form>
              <Form.Group controlId="reviewTextarea">
                <Form.Label>Write a Review</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your review here" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit Review
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <br />
            <br />
            <ReviewList reviews={reviews} title={`All User Reviews For "${movie.title}"`}/>
          </Col>
        </Row>
      </Container>
    </div>
  );

};

export default MovieInfo;