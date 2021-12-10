import React from "react";
import { Link } from "react-router-dom";
import {
   Card,
   Container,
   ImageContainer,
   Image,
   InfoContainer,
   Title,
} from "./style";

const Cast = ({ cast }) => {
   return (
      <Container>
         <Link
            style={{ textDecoration: "none" }}
            to={`casts/${cast.id}`}
            state={{ id: cast.id }}
         >
            <Card>
               <ImageContainer>
                  <Image
                     src={
                        cast.profile_path
                           ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                           : "https://irisvision.com/wp-content/uploads/2019/01/no-profile-1.png"
                     }
                  />
               </ImageContainer>
               <InfoContainer>
                  <Title>{cast.name}</Title>
               </InfoContainer>
            </Card>
         </Link>
      </Container>
   );
};

export default Cast;
