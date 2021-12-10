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
   OverView,
} from "./style";
import { Link } from "react-router-dom";

const Movie = ({ movie, cat }) => {
   return (
      <Container>
         <Link
            style={{ textDecoration: "none" }}
            to={`movie/${movie.id}`}
            state={{ id: movie.id }}
         >
            <Card>
               <ImageContainer>
                  <Image
                     src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                     alt="coming"
                  />
                  <OverView>
                     <h4>{movie.overview}</h4>
                  </OverView>
               </ImageContainer>

               <InfoContainer>
                  <Origin>{movie.release_date}</Origin>
                  <Title>{movie.title}</Title>
                  <Rating>Rating: {movie.vote_average}</Rating>
                  <Tag></Tag>
               </InfoContainer>
            </Card>
         </Link>
      </Container>
   );
};

export default Movie;
