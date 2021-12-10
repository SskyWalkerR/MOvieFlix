import React from "react";
import "./style.css";
import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CastList from "./pages/CastList";
import Movie from "./pages/Movie/Movie";
import Cast from "./pages/Cast/Cast";

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/movies/:cat" element={<MovieList />} />
               <Route path={"/movie/:id"} element={<Movie />} />
               <Route path={"/movies/:cat/movie/:id"} element={<Movie />} />
               <Route path="/casts" element={<CastList />} />
               <Route path="/casts/:id" element={<Cast />} />
               <Route path="/casts/casts/:id" element={<Cast />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default App;
