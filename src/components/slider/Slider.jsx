import React, { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import {
   Container,
   Arrow,
   Image,
   Wrapper,
   ImgContainer,
   InfoContainer,
   Title,
   Desc,
   Button,
   Slide,
} from "./style";
import { request } from "../../api/tmbd";
import { Link } from "react-router-dom";

const Slider = () => {
   const [sliders, setSliders] = useState([]);
   const [sliderIndex, setSliderIndex] = useState(0);

   useEffect(() => {
      const getMovies = async () => {
         try {
            const res = await request.get("movie/now_playing?");
            setSliders(res.data.results);
         } catch (error) {
            console.log("Slider Error");
         }
      };
      getMovies();
   }, []);

   const handleClick = (direction) => {
      if (direction === "left") {
         setSliderIndex(sliderIndex > 0 ? sliderIndex - 1 : 4);
         console.log(sliderIndex);
      } else {
         setSliderIndex(sliderIndex < 4 ? sliderIndex + 1 : 0);
         console.log(sliderIndex);
      }
   };

   return (
      <Container>
         <Arrow direction="left" onClick={() => handleClick("left")}>
            <GoChevronLeft />
         </Arrow>
         <Wrapper sliderIndex={sliderIndex}>
            {sliders.map((movie) => (
               <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`movie/${movie.id}`}
                  state={{ id: movie.id }}
                  key={movie.id}
               >
                  <Slide>
                     <ImgContainer>
                        <Image
                           src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                        />
                     </ImgContainer>
                     <InfoContainer>
                        <Title>{movie.title}</Title>
                        <Desc>{movie.overview}</Desc>
                        <Button>WATCH NOW</Button>
                     </InfoContainer>
                  </Slide>
               </Link>
            ))}
         </Wrapper>
         <Arrow direction="right" onClick={() => handleClick("right")}>
            <GoChevronRight />
         </Arrow>
      </Container>
   );
};

export default Slider;
