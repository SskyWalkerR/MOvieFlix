import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import {
   Biography,
   Container,
   Dob,
   Image,
   InfoContainer,
   Name,
   Pob,
   Wrapper,
} from "./style";
import { request } from "../../api/tmbd";

const Cast = () => {
   const location = useLocation();
   const { id } = location.state;
   const [cast, setCast] = useState({});
   //    console.log(id);

   useEffect(() => {
      const getActor = async () => {
         try {
            const res = await request.get(`/person/${id}`);
            setCast(res.data);
         } catch (error) {
            console.log("ACTOR ERROR");
         }
      };
      getActor();
   }, [id]);

   return (
      <Container>
         <Wrapper>
            <Image
               src={
                  cast.profile_path
                     ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                     : "https://irisvision.com/wp-content/uploads/2019/01/no-profile-1.png"
               }
            />
            <InfoContainer>
               <Name>{cast.name ? cast.name : "N/A"}</Name>
               <Biography>{cast.biography ? cast.biography : "N/A"}</Biography>
               <Dob>BIRTHDAY : {cast.birthday ? cast.birthday : "N/A"}</Dob>
               <Pob>
                  PLACE OF BIRTH :{" "}
                  {cast.place_of_birth ? cast.place_of_birth : "N/A"}
               </Pob>
            </InfoContainer>
         </Wrapper>
      </Container>
   );
};

export default Cast;
