import React, { useEffect, useState } from "react";
import { Container, Top, Title, MovieContainer } from "./style";
import Movie from "./movie/Movie";
import { request } from "../../api/tmbd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Movies = ({ title, cat, tv }) => {
   const [movieList, setMovieList] = useState([]);

   useEffect(() => {
      const getMovies = async () => {
         try {
            if (title === "Trending") {
               const res = await request.get(
                  tv ? `trending/tv/day?` : `trending/movie/day?`
               );
               setMovieList(res.data.results);
            } else if (title === "On The Air") {
               const res = await request.get(`tv/on_the_air?`);
               setMovieList(res.data.results);
            } else if (title === "Airing Today") {
               const res = await request.get("tv/airing_today?");
               setMovieList(res.data.results);
            } else if (title === "Now Playing") {
               const res = await request.get(`movie/now_playing?`);
               setMovieList(res.data.results);
            } else if (title === "Top Rated") {
               const res = await request.get(
                  tv ? "tv/top_rated?" : "movie/top_rated?"
               );
               setMovieList(res.data.results);
            } else if (title === "Up Coming") {
               const res = await request.get("movie/upcoming?");
               setMovieList(res.data.results);
            } else {
               const res = await request.get(
                  tv ? "tv/popular" : "movie/popular?"
               );
               setMovieList(res.data.results);
            }
         } catch (error) {
            console.log("error");
         }
      };
      getMovies();
   }, [title, tv]);

   return (
      <Container>
         {title && (
            <Top>
               <Title>{title}</Title>
               {/* <Link style={{ textDecoration: "none" }} to={`/movies/${cat}`}>
                  {cat && <Title direction="right">Explore more</Title>}
               </Link> */}
            </Top>
         )}

         <MovieContainer>
            <Swiper slidesPerView={"auto"}>
               {movieList.map((movie) => {
                  return (
                     <SwiperSlide key={movie.id} style={{ flex: "1" }}>
                        <Movie movie={movie} tv={tv} />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </MovieContainer>
      </Container>
   );
};

export default Movies;

// (
//    movieList.map((movie) => {
//       return <Movie movie={movie} key={movie.id} cat={cat} />;
//    })
// )
