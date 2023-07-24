const ReviewList = (props) => {
    const reviews = props.reviews;
    const title = props.title;


    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {reviews.map((review) => (
                <div className="review-preview" key={review.id}>
                    <h2>{review.title}</h2>
                    <p>Written by {review.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default ReviewList;