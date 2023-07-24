import { useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StarFill } from 'react-bootstrap-icons';
import YouTubeVideoOverlay from './YoutubeVideoOverlay';


const PopCarousel = () => {
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
            <h2>Popular This Week on FlicSurf</h2>
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                <Carousel.Item>
                    <div className="cards-wrapper">
                        {/* card 1*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/indiana.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/movies/16`} style={{ textDecoration: 'none' }}>
                                        <strong>Indiana Jones and the Dial of Destiny</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>6.8</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal1} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 2*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/mirror.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/14`} style={{ textDecoration: 'none' }}>
                                        <strong>Black Mirror</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.8</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal2} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 3*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/asteroid.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/movies/13`} style={{ textDecoration: 'none' }}>
                                        <strong>Asteroid City</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>7.4</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal3} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 4*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/flash.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/movies/14`} style={{ textDecoration: 'none' }}>
                                        <strong>The Flash</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>7.3</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal4} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 5*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/extraction.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/movies/12`} style={{ textDecoration: 'none' }}>
                                        <strong>Extraction 2</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>7.5</strong>
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
                                <Card.Img variant="top" src={require('./posters/spider.jpg')} />
                            </div>
                            <Card.Body>
                                <div className="card-title-wrapper">
                                    <Card.Title>
                                        <Link to={`/movies/11`} style={{ textDecoration: 'none' }}>
                                            <strong>Spider-Man: Across the Spider-Verse</strong>
                                        </Link>
                                    </Card.Title>
                                </div>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.6</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal6} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 7*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/silo.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/11`} style={{ textDecoration: 'none' }}>
                                        <strong>Silo</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.2</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal7} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 8*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/feelings.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/movies/15`} style={{ textDecoration: 'none' }}>
                                        <strong>No Hard Feelings</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>6.9</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal8} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 9*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/bear.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/13`} style={{ textDecoration: 'none' }}>
                                        <strong>The Bear</strong>
                                    </Link>
                                </Card.Title>
                                <Card.Text>
                                    <StarFill color="gold" size={20}/><strong>8.4</strong>
                                </Card.Text>
                                <Button onClick={handleOpenModal9} variant="secondary">Watch Trailer</Button>
                            </Card.Body>
                        </Card>

                        {/* card 10*/}
                        <Card>
                            <div className="image-wrapper">
                                <Card.Img variant="top" src={require('./posters/succession.jpg')} />
                            </div>
                            <Card.Body>
                                <Card.Title>
                                    <Link to={`/shows/12`} style={{ textDecoration: 'none' }}>
                                        <strong>Succession</strong>
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
                    videoId="eQfMbSe7F2g"
                    videoTitle="Trailer: Indiana Jones and the Dial of Destiny"
                    onClose={handleCloseModal1}
                />
            )}
            {showModal2 && (
                <YouTubeVideoOverlay
                    videoId="5jY1ecibLYo"
                    videoTitle="Trailer: Black Mirror (Season 6)"
                    onClose={handleCloseModal2}
                />
            )}
            {showModal3 && (
                <YouTubeVideoOverlay
                    videoId="9FXCSXuGTF4"
                    videoTitle="Trailer: Asteroid City"
                    onClose={handleCloseModal3}
                />
            )}
            {showModal4 && (
                <YouTubeVideoOverlay
                    videoId="jprhe-cWKGs"
                    videoTitle="Trailer: The Flash"
                    onClose={handleCloseModal4}
                />
            )}
            {showModal5 && (
                <YouTubeVideoOverlay
                    videoId="Y274jZs5s7s"
                    videoTitle="Trailer: Extraction 2"
                    onClose={handleCloseModal5}
                />
            )}
            {showModal6 && (
                <YouTubeVideoOverlay
                    videoId="shW9i6k8cB0"
                    videoTitle="Trailer: Spider-Man: Across the Spider-Verse"
                    onClose={handleCloseModal6}
                />
            )}
            {showModal7 && (
                <YouTubeVideoOverlay
                    videoId="8ZYhuvIv1pA"
                    videoTitle="Trailer: Silo"
                    onClose={handleCloseModal7}
                />
            )}
            {showModal8 && (
                <YouTubeVideoOverlay
                    videoId="W3-slBOV84w"
                    videoTitle="Trailer: No Hard Feelings"
                    onClose={handleCloseModal8}
                />
            )}
            {showModal9 && (
                <YouTubeVideoOverlay
                    videoId="_KLsZVMbu8U"
                    videoTitle="Trailer: The Bear (Season 2)"
                    onClose={handleCloseModal9}
                />
            )}
            {showModal10 && (
                <YouTubeVideoOverlay
                    videoId="t3D3ewle7XY"
                    videoTitle="Trailer: Succession (Season 4)"
                    onClose={handleCloseModal10}
                />
            )}
        </div>
    );
}
 
export default PopCarousel;