import React from "react";
import "./style.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./pages/Movie/Movie";
import Cast from "./pages/Cast/Cast";
import TvSeries from "./pages/TvSeries";

const App = () => {
   return (
      <div>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path={"movie/:id"} element={<Movie />} />
               <Route path="casts/:id" element={<Cast />} />
               <Route path="show" element={<TvSeries />} />
               <Route path="show/tv/:id" element={<Movie tv={true} />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
};

export default App;
