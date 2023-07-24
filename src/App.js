import React, { useEffect } from "react";
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Movies from './Movies';
import MovieInfo from "./MovieInfo";
import ShowInfo from "./ShowInfo";
import { getMovieById } from "./utils";
import { getShowById } from "./utils";
import Shows from './Shows';
import Lists from './Lists';
import RatingBarGraph from './RatingBarGraph';
import QuizPage from './QuizPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  // const title = "yo";
  // const likes = 50;
  // const link = "http://www.google.com";

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route
              path="/movies/:id"
              render={(props) => {
                const movieId = props.match.params.id;
                const movie = getMovieById(movieId);
                return <MovieInfo movie={movie} />;
              }}
            />
            <Route exact path="/shows">
              <Shows />
            </Route>
            <Route
              path="/shows/:id"
              render={(props) => {
                const movieId = props.match.params.id;
                const movie = getShowById(movieId);
                return <ShowInfo movie={movie} />;
              }}
            />
            <Route exact path="/lists">
              <Lists />
            </Route>
            <Route
              path="/ratings/:id"
              render={(props) => {
                const movieId = props.match.params.id;
                const movie = getMovieById(movieId); // Modify this function based on your data source
                return <RatingBarGraph movie={movie} />;
              }}
            />
            <Route
              path="/showratings/:id"
              render={(props) => {
                const movieId = props.match.params.id;
                const movie = getShowById(movieId); // Modify this function based on your data source
                return <RatingBarGraph movie={movie} />;
              }}
            />
            
            <Route exact path="/quiz">
              <QuizPage />
            </Route>
          </Switch>

          {/* <h1>{ title }</h1>
          <p>Liked { likes } times</p>
          <p>{ "yo" }</p>
          <p>{ [1,2,3,4,5] }</p>
          <p>{ Math.random() * 10 }</p>

          <a href={link}>google!!!!!</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
