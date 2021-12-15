import React, { useEffect, useState } from "react";
import { Container, Top, Title, CastContainer } from "./style";
import Cast from "./Cast/Cast";
import { request } from "../../api/tmbd";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Casts = () => {
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
         <Top>
            <Title direction="left">Featured Casts</Title>
            {/* <Link style={{ textDecoration: "none" }} to="/casts">
                  <Title direction="right">See more</Title>
               </Link> */}
         </Top>

         <CastContainer>
            <Swiper slidesPerView={"auto"}>
               {castList.map((cast) => {
                  return (
                     <SwiperSlide style={{ flex: "1" }} key={cast.id}>
                        <Cast cast={cast} />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </CastContainer>
      </Container>
   );
};

export default Casts;

// (
//    castList.map((cast) => {
//       return <Cast cast={cast} key={cast.id} />;
//    })
// )
