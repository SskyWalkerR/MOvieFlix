import React from "react";
import Movies from "../components/movies/Movies";
import NavBar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Footer from "../components/footer/Footer";

const TvSeries = () => {
   return (
      <div>
         <NavBar />
         <Slider tv={true} />
         <Movies title="Trending" tv={true} />
         <Movies title="On The Air" tv={true} />
         <Movies title="Top Rated" tv={true} />
         <Movies title="Airing Today" tv={true} />
         <Movies title="Popular" tv={true} />
         <Footer />
      </div>
   );
};

export default TvSeries;
