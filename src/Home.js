import { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import PopCarousel from './PopCarousel';
import TopTvCarousel from './TopTvCarousel';
import useFetch from './useFetch';
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
            <PopCarousel />
            <br></br>
            <TopTvCarousel />
            {/* <ReviewList reviews={reviews} title="All Reviews For moviename"/> */}
            {/* <ReviewList reviews={reviews.filter((review) => review.author === 'reviewman')} title="All Reviews For moviename by reviewman "/> */}
        </div>
    );
}
 
export default Home;