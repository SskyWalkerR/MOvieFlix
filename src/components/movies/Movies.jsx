import React, { useEffect, useState } from "react";
import { Container, Top, Title, MovieContainer } from "./style";
import Movie from "./movie/Movie";
import { request } from "../../api/tmbd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Movies = ({ title, cat }) => {
   const [movieList, setMovieList] = useState([]);

   useEffect(() => {
      const getMovies = async () => {
         try {
            if (title === "Trending") {
               const res = await request.get(`trending/movie/day?`);
               setMovieList(res.data.results);
            } else if (title === "Now Playing") {
               const res = await request.get(`movie/now_playing?`);
               setMovieList(res.data.results);
            } else if (title === "Top Rated") {
               const res = await request.get("movie/top_rated?");
               setMovieList(res.data.results);
            } else if (title === "Up Coming") {
               const res = await request.get("movie/upcoming?");
               setMovieList(res.data.results);
            } else {
               const res = await request.get("movie/popular?");
               setMovieList(res.data.results);
            }
         } catch (error) {
            console.log("error");
         }
      };
      getMovies();
   }, [title]);

   return (
      <Container>
         {title && (
            <Top>
               <Title direction="left">{title}</Title>
               <Link style={{ textDecoration: "none" }} to={`/movies/${cat}`}>
                  {cat && <Title direction="right">Explore more</Title>}
               </Link>
            </Top>
         )}

         <MovieContainer>
            {cat ? (
               <Swiper slidesPerView={"auto"}>
                  {movieList.splice(0, 10).map((movie) => {
                     return (
                        <SwiperSlide key={movie.id} style={{ flex: "1" }}>
                           <Movie movie={movie} />;
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            ) : (
               movieList.map((movie) => {
                  return <Movie movie={movie} key={movie.id} cat={cat} />;
               })
            )}
         </MovieContainer>
      </Container>
   );
};

export default Movies;
