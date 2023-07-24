import React, { useState } from "react";
import { Link } from "react-router-dom";
import { data } from "./movies_data";

const quizQuestions = [
  {
    question: "What is your favorite movie genre?",
    options: ["Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Adventure", "Romance"],
  },
  {
    question: "Which actor/actress do you admire the most?",
    options: ["Tom Hanks", "Meryl Streep", "Leonardo DiCaprio", "Scarlett Johansson", "Brad Pitt", "Emma Stone"],
  },
  {
    question: "What is your preferred movie decade?",
    options: ["1920s", "1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"],
  },
  {
    question: "Choose a movie franchise:",
    options: ["Harry Potter", "Marvel Cinematic Universe", "Star Wars", "James Bond", "The Lord of the Rings", "Fast & Furious", "Jurassic Park"],
  },
  {
    question: "Which movie award show do you follow?",
    options: ["Academy Awards (Oscars)", "Golden Globe Awards", "BAFTA Awards", "Screen Actors Guild Awards", "Critics' Choice Movie Awards", "None"],
  },
];

const QuizPage = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendedMovie, setRecommendedMovie] = useState(null);

  const handleAnswerSelection = (questionIndex, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionIndex]: answer }));
  };

  const handleSubmitQuiz = (event) => {
    event.preventDefault();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomMovie = data[randomIndex];
    setRecommendedMovie(randomMovie);
    setShowResult(true);
  };

  const renderQuizQuestions = () => {
    return quizQuestions.map((question, index) => (
      <div key={index} style={{ marginBottom: "20px" }}>
        <h4>{question.question}</h4>
        <div>
          {question.options.map((option) => (
            <label key={option}>
              <input
                type="radio"
                value={option}
                checked={answers[index] === option}
                onChange={() => handleAnswerSelection(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    ));
  };

  const renderQuizResult = () => {
    return (
      <div>
        <h2>Recommended Movie:</h2>
        {recommendedMovie ? (
          <div>
            <h3>{recommendedMovie.title}</h3>
            <p>{recommendedMovie.description}</p>
            {/* You can display other movie details here */}
          </div>
        ) : (
          <p>No recommended movie at the moment.</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <h1>Movie Recommendation Quiz</h1>
      <form onSubmit={handleSubmitQuiz}>
        {showResult ? renderQuizResult() : renderQuizQuestions()}
        {!showResult && <button type="submit">Submit</button>}
      </form>
    </div>
  );
};

export default QuizPage;
