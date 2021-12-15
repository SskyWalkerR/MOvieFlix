import React, { useEffect } from "react";
import { FaImdb } from "react-icons/fa";
import {
   Container,
   HeroImage,
   Info,
   Image,
   InfoContainer,
   Title,
   Desc,
   ProductionInfo,
   Item,
   Rating,
} from "./style";
import { useLocation } from "react-router";
import { request } from "../../api/tmbd";
import { useState } from "react/cjs/react.development";

const imdbStyle = {
   fontSize: "20px",
   marginRight: "15px",
   color: "yellow",
   "@media (maxWidth: 500px)": {
      fontSize: "10px",
   },
};

const Movie = ({ tv }) => {
   const [movie, setMovie] = useState({});
   const location = useLocation();
   const { id } = location.state;

   // console.log(id);

   useEffect(() => {
      const getMovie = async () => {
         try {
            const res = await request.get(tv ? `tv/${id}` : `movie/${id}`);
            setMovie(res.data);
         } catch (error) {
            console.log("ERROR");
         }
      };
      getMovie();
   }, []);

   return (
      <div>
         {/* <NavBar /> */}
         <Container>
            <HeroImage>
               <Image
                  type="full"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
               />
            </HeroImage>
            <InfoContainer>
               <Image
                  type="half"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
               />
               <Info>
                  <Title>{tv ? movie.name : movie.title}</Title>
                  <Desc>{movie.overview}</Desc>
                  <ProductionInfo>
                     <Item>
                        PRODUCTION :
                        {movie.production_companies
                           ?.map((data) => data.name)
                           ?.join(", ")}
                     </Item>
                     <Item>
                        {tv ? (
                           <>
                              HOME PAGE :{" "}
                              <a
                                 style={{
                                    textDecoration: "none",
                                    color: "#A2DBFA",
                                 }}
                                 href={movie.homepage}
                              >
                                 {movie.homepage}
                              </a>
                           </>
                        ) : (
                           <>RUNTIME : {movie.runtime} MIN</>
                        )}
                     </Item>
                     <Item>
                        GENRES :{" "}
                        {movie.genres?.map((data) => data.name).join(", ")}
                     </Item>
                     <Item>
                        LANG :{" "}
                        {movie.spoken_languages
                           ?.map((data) => data.english_name)
                           ?.join(", ")}
                     </Item>
                  </ProductionInfo>
                  <Rating>RATING : {movie.vote_average}</Rating>
               </Info>
            </InfoContainer>
         </Container>
      </div>
   );
};

export default Movie;
