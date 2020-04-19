import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import FavouriteMovies from "./FavouriteMovies";
import MovieDetail from "./MovieDetail";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route path="/" component={Dashboard} exact />
        <Route path="/detail/:movieId" component={MovieDetail} />
        <Route path="/favourites" component={FavouriteMovies} exact />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
