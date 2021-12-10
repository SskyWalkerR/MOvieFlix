import React from "react";
import Navbar from "../components/navbar/Navbar";
import Movies from "../components/movies/Movies";
import Footer from "../components/footer/Footer";
import { useLocation } from "react-router-dom";

const MovieList = () => {
   const title = useLocation().pathname.split("/")[2];
   const newTitle = title.replace(/_/g, " ");
   const capitalize = newTitle.replace(/\b\w/g, (l) => l.toUpperCase());
   return (
      <div>
         <Navbar />
         <Movies title={capitalize} page={1} />
         <Footer />
      </div>
   );
};

export default MovieList;
