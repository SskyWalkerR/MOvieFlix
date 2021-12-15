import React from "react";
import Casts from "../components/casts/Casts";
import Footer from "../components/footer/Footer";
import Movies from "../components/movies/Movies";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";

const Home = () => {
   return (
      <div>
         <Navbar />
         <Slider />
         <Movies title="Trending" cat="trending" />
         <Movies title="Now Playing" cat="now_playing" />
         <Movies title="Top Rated" cat="top_rated" />
         <Movies title="Up Coming" cat="upcoming" />
         <Movies title="Popular" cat="popular" />
         <Casts />
         <Footer />
      </div>
   );
};

export default Home;
