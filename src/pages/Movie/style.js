import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
   height: 100vh;
`;

export const HeroImage = styled.div`
   height: 100%;
   width: 100%;
   position: relative;
`;
export const Image = styled.img`
   height: ${(props) => (props.type === "full" ? "100%" : "60%")};
   width: ${(props) => (props.type === "full" ? "100%" : "20%")};
   object-fit: cover;
   border-radius: 5px;
   margin: ${(props) => props.type === "half" && "0 100px"};

   ${mobile({
      display: ($props) => $props.type === "half" && "none",
   })}
`;
export const InfoContainer = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.7);
   display: flex;
   justify-content: space-around;
   align-items: center;
   ${mobile({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
   })}
`;

export const Info = styled.div`
   color: white;
   margin: 0 80px;
   flex: 1;
   ${mobile({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
   })}
`;

export const Title = styled.h1`
   font-size: 70px;
   font-weight: 700;
   ${mobile({
      fontSize: "25px",
      textAlign: "center",
      margin: "0",
      padding: "0",
   })}
`;

export const Desc = styled.p`
   text-align: justify;
   font-size: 24px;
   ${mobile({ fontSize: "15px" })}
`;

export const ProductionInfo = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: center;
   flex-direction: column;
   margin-bottom: 10px;
   flex: 1;
   flex-wrap: wrap;
   ${mobile({ flex: "0" })}
`;
export const Production = styled.div``;

export const Item = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   font-size: 14px;
   margin: 5px 0;
`;

export const Rating = styled.div`
   display: flex;
   align-items: center;
   font-size: 35px;
   ${mobile({ fontSize: "15px", marginBottom: "20px" })}
`;

export const Imdb = styled.img``;
