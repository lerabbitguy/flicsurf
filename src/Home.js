import { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import PopCarousel from './PopCarousel';
import TopTvCarousel from './TopTvCarousel';
import useFetch from './useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

//import reviews from './data/reviews.json';


const Home = () => {
    //const { data: reviews, isPending, error } = useFetch('http://localhost:8000/reviews');
    const [reviews, setReviews] = useState([
        { title: 'Awful Movie!', body: 'lorem ipsum...', author: 'reviewbro', id: 1 },
        { title: 'I loved the part where Glup Shitto showed up.', body: 'lorem ipsum...', author: 'reviewman', id: 2 },
        { title: 'A masterpiece. I have no words.', body: 'lorem ipsum...', author: 'reviewman', id: 3 }
      ]);

    return (
        
        <div className="home" style={{ margin: "40px auto", padding: "20px" }}>
            <h1 className="text-center"><strong>Not sure what to watch?</strong></h1>
            <h2 className="text-center">Take our quiz and find the perfect movie for you!</h2>
            <div style={styles.buttonContainer}>
            <Link to="/quiz">
                <button style={styles.button}>Take the Quiz</button>
            </Link>
        </div>
            <br></br>
            <br></br>
            <PopCarousel />
            <br></br>
            <TopTvCarousel />
            {/* <ReviewList reviews={reviews} title="All Reviews For moviename"/> */}
            {/* <ReviewList reviews={reviews.filter((review) => review.author === 'reviewman')} title="All Reviews For moviename by reviewman "/> */}
        
        </div>
    );
}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    buttonContainer: {
      marginTop: 20,
      display: "flex",
        justifyContent: "center",
    },
    button: {
      padding: "10px 20px",
      fontSize: 16,
      fontWeight: "bold",
      backgroundColor: "#f1356d",
      color: "white",
      border: "none",
      borderRadius: 5,
      cursor: "pointer",
    },
};
 
export default Home;