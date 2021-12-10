import React, { useEffect, useState } from "react";
import { Container, Top, Title, CastContainer } from "./style";
import Cast from "./Cast/Cast";
import { request } from "../../api/tmbd";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Casts = ({ allCast }) => {
   const [castList, setCastList] = useState([]);

   useEffect(() => {
      const getPeople = async () => {
         try {
            const res = await request.get("person/popular?");
            setCastList(res.data.results);
         } catch (error) {
            console.log("error");
         }
      };
      getPeople();
   }, []);
   return (
      <Container>
         {!allCast && (
            <Top>
               <Title direction="left">Featured Casts</Title>
               <Link style={{ textDecoration: "none" }} to="/casts">
                  <Title direction="right">See more</Title>
               </Link>
            </Top>
         )}

         <CastContainer>
            {!allCast ? (
               <Swiper slidesPerView={"auto"}>
                  {castList.slice(0, 10).map((cast) => {
                     return (
                        <SwiperSlide style={{ flex: "1" }} key={cast.id}>
                           <Cast cast={cast} />
                        </SwiperSlide>
                     );
                  })}
               </Swiper>
            ) : (
               castList.map((cast) => {
                  return <Cast cast={cast} key={cast.id} />;
               })
            )}
         </CastContainer>
      </Container>
   );
};

export default Casts;
