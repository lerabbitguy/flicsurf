import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';
import YouTubeVideoOverlay from './YoutubeVideoOverlay';

const TopTvCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);
    const [showModal8, setShowModal8] = useState(false);
    const [showModal9, setShowModal9] = useState(false);
    const [showModal10, setShowModal10] = useState(false);

    const handleOpenModal1 = () => {
        setShowModal1(true);
    };
    const handleCloseModal1 = () => {
        setShowModal1(false);
    };
    const handleOpenModal2 = () => {
        setShowModal2(true);
    };
    const handleCloseModal2 = () => {
        setShowModal2(false);
    };
    const handleOpenModal3 = () => {
        setShowModal3(true);
    };
    const handleCloseModal3 = () => {
        setShowModal3(false);
    };
    const handleOpenModal4 = () => {
        setShowModal4(true);
    };
    const handleCloseModal4 = () => {
        setShowModal4(false);
    };
    const handleOpenModal5 = () => {
        setShowModal5(true);
    };
    const handleCloseModal5 = () => {
        setShowModal5(false);
    };
    const handleOpenModal6 = () => {
        setShowModal6(true);
    };
    const handleCloseModal6 = () => {
        setShowModal6(false);
    };
    const handleOpenModal7 = () => {
        setShowModal7(true);
    };
    const handleCloseModal7 = () => {
        setShowModal7(false);
    };
    const handleOpenModal8 = () => {
        setShowModal8(true);
    };
    const handleCloseModal8 = () => {
        setShowModal8(false);
    };
    const handleOpenModal9 = () => {
        setShowModal9(true);
    };
    const handleCloseModal9 = () => {
        setShowModal9(false);
    };
    const handleOpenModal10 = () => {
        setShowModal10(true);
    };
    const handleCloseModal10 = () => {
        setShowModal10(false);
    };

    return (
        <div className="carousel">
            <h2>Top Rated TV Shows</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item>
                    <div className="cards-wrapper">
                        {/* card 1*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/breaking.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/1`} style={{ textDecoration: 'none' }}>
                                        <strong>Breaking Bad</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.4</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal1} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 2*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/chernobyl.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/2`} style={{ textDecoration: 'none' }}>
                                        <strong>Chernobyl</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.3</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal2} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 3*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/sopranos.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/3`} style={{ textDecoration: 'none' }}>
                                        <strong>The Sopranos</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.2</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal3} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 4*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/wire.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/4`} style={{ textDecoration: 'none' }}>
                                        <strong>The Wire</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.2</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal4} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 5*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/bob.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/5`} style={{ textDecoration: 'none' }}>
                                        <strong>Band of Brothers</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.1</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal5} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="cards-wrapper">
                        {/* card 6*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/got.jpg')} />
                            </div>
                            <Card.Body>
                                <div className="card-title-wrapper">
                                    <Card.Title>
                                        <Link to={`/shows/6`} style={{ textDecoration: 'none' }}>
                                            <strong>Game of Thrones</strong>
                                        </Link>
                                    </Card.Title>
                                </div>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.0</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal6} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 7*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/robot.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/7`} style={{ textDecoration: 'none' }}>
                                        <strong>Mr. Robot</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>9.0</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal7} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 8*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/detective.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/8`} style={{ textDecoration: 'none' }}>
                                        <strong>True Detective</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.9</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal8} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 9*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/office.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/9`} style={{ textDecoration: 'none' }}>
                                        <strong>The Office</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.8</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal9} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 10*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/bcs.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/10`} style={{ textDecoration: 'none' }}>
                                        <strong>Better Call Saul</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.8</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal10} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </Carousel.Item>
                
            </Carousel>
            {showModal1 && (
                <YouTubeVideoOverlay
                    videoId="m07slv7BP6o"
                    videoTitle="Trailer: Breaking Bad"
                    onClose={handleCloseModal1}
                />
            )}
            {showModal2 && (
                <YouTubeVideoOverlay
                    videoId="s9APLXM9Ei8"
                    videoTitle="Trailer: Chernobyl"
                    onClose={handleCloseModal2}
                />
            )}
            {showModal3 && (
                <YouTubeVideoOverlay
                    videoId="KMx4iFcozK0"
                    videoTitle="Trailer: The Sopranos"
                    onClose={handleCloseModal3}
                />
            )}
            {showModal4 && (
                <YouTubeVideoOverlay
                    videoId="1S5khOZ1wBs"
                    videoTitle="Trailer: The Wire"
                    onClose={handleCloseModal4}
                />
            )}
            {showModal5 && (
                <YouTubeVideoOverlay
                    videoId="KKRBAFlN5ww"
                    videoTitle="Trailer: Band of Brothers"
                    onClose={handleCloseModal5}
                />
            )}
            {showModal6 && (
                <YouTubeVideoOverlay
                    videoId="bjqEWgDVPe0"
                    videoTitle="Trailer: Game of Thrones"
                    onClose={handleCloseModal6}
                />
            )}
            {showModal7 && (
                <YouTubeVideoOverlay
                    videoId="Oc-AsN7d1wg"
                    videoTitle="Trailer: Mr. Robot (Season 2)"
                    onClose={handleCloseModal7}
                />
            )}
            {showModal8 && (
                <YouTubeVideoOverlay
                    videoId="fVQUcaO4AvE"
                    videoTitle="Trailer: True Detective (Season 1)"
                    onClose={handleCloseModal8}
                />
            )}
            {showModal9 && (
                <YouTubeVideoOverlay
                    videoId="gO8N3L_aERg"
                    videoTitle="Clip: The Office"
                    onClose={handleCloseModal9}
                />
            )}
            {showModal10 && (
                <YouTubeVideoOverlay
                    videoId="9q4qzYrHVmI"
                    videoTitle="Trailer: Better Call Saul"
                    onClose={handleCloseModal10}
                />
            )}
        </div>
    );
}
 
export default TopTvCarousel;