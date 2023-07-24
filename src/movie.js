import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';
import { StarFill } from 'react-bootstrap-icons';

function movie({ title, poster, genre, length, rating, id }) {
    return (
        <Card className='m-2' style={{ width: '11rem' }}>
            <Card.Img variant="top" src={require(`./posters/${poster}.jpg`)}/>
            <Card.Body>
                <Card.Title>
                    <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
                        <strong>{title}</strong>
                    </Link>
                </Card.Title>
                <Card.Text>
                    <Row>
                        <Col>Genre:</Col>
                        <Col>{genre}</Col>
                    </Row>
                    <Row>
                        <Col>Length:</Col>
                        <Col>{length}</Col>
                    </Row>
                    <Row>
                        <Col>Rating:</Col>
                        <Col><StarFill color="gold" size={20}/>{rating}</Col>
                    </Row>
                </Card.Text>
                {/* <Container className='text-center'>
                    <Button variant="secondary">Watch Trailer</Button>
                </Container> */}
            </Card.Body>
        </Card>
    );
}

export default movie;