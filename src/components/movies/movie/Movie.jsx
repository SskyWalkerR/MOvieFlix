import React from "react";
import {
   Card,
   Container,
   ImageContainer,
   Image,
   InfoContainer,
   Origin,
   Title,
   Rating,
   Tag,
} from "./style";
import { Link } from "react-router-dom";

const Movie = ({ movie, cat, tv }) => {
   return (
      <Container>
         <Link
            style={{ textDecoration: "none" }}
            to={tv ? `tv/${movie.id}` : `movie/${movie.id}`}
            state={{ id: movie.id }}
         >
            <Card>
               <ImageContainer>
                  <Image
                     src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                     alt="coming"
                  />
               </ImageContainer>

               <InfoContainer>
                  <Origin>
                     {tv ? movie.first_air_date : movie.release_date}
                  </Origin>
                  <Title>{tv ? movie.name : movie.title}</Title>
                  <Rating>Rating: {movie.vote_average}</Rating>
                  <Tag></Tag>
               </InfoContainer>
            </Card>
         </Link>
      </Container>
   );
};

export default Movie;
