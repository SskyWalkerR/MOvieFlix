import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
   width: 100%;
   height: 90vh;
   display: flex;
   position: relative;
   overflow: hidden;
`;

export const Arrow = styled.div`
   width: 50px;
   height: 50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   top: 0;
   bottom: 0;
   left: ${(props) => props.direction === "left" && "10px"};
   right: ${(props) => props.direction === "right" && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
   font-size: 20px;
`;

export const Wrapper = styled.div`
   height: 100%;
   display: flex;
   transition: all 1.5s ease;
   transform: translateX(${(props) => props.sliderIndex * -100}vw);
`;

export const Slide = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   ${mobile({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
   })}
`;

export const ImgContainer = styled.div`
   height: 100%;
   flex: 2;
   ${mobile({ flex: 0 })}
`;

export const Image = styled.img`
   height: 80%;
   width: 100%;
   object-fit: cover;
   border-radius: 10px;
   margin-left: 5px;
   -webkit-box-shadow: 10px 13px 28px 0px rgba(191, 191, 191, 1);
   -moz-box-shadow: 10px 13px 28px 0px rgba(191, 191, 191, 1);
   box-shadow: 10px 13px 28px 0px rgba(191, 191, 191, 1);
   ${mobile({ height: "80%", marginLeft: 0 })}
`;

export const InfoContainer = styled.div`
   flex: 1;
   padding: 50px;
   ${mobile({ padding: 0, flex: 0 })}
`;

export const Title = styled.h1`
   font-size: 70px;
   ${mobile({ fontSize: "20px", marginLeft: "40px" })}
`;

export const Desc = styled.p`
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   text-align: justify;
   ${mobile({ margin: "0 40px", textAlign: "justify", fontSize: "15px" })}
`;

export const Button = styled.button`
   padding: 6px 16px;
   font-size: 20px;
   background-color: #be123c;
   cursor: pointer;
   color: white;
   border: none;
   width: 170px;
   height: 36px;
   border-radius: 6px;
   ${mobile({ margin: "40px 40px" })}
`;
