import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
   background-color: #181818;
   height: 100vh;
   width: 100%;
   ${mobile({ height: "100vh", height: "150vh" })}
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 100%;
   margin: 0 50px;
   ${mobile({ flexDirection: "column", margin: "0 10px" })}
`;
export const Image = styled.img`
   height: 300px;
   border-radius: 5px;
   object-fit: cover;
   ${mobile({ display: "none" })}
`;
export const InfoContainer = styled.div`
   color: #b3b3b3;
   padding: 0 20px;
   flex: 2;
   ${mobile({ marginLeft: "0", padding: "0" })}
`;

export const Name = styled.h1`
   font-size: 50px;
   font-weight: 700;
   ${mobile({ fontSize: "30px" })}
`;

export const Biography = styled.div`
   font-size: 15px;
   margin-bottom: 25px;
   ${mobile({ fontSize: "15px", textAlign: "justify", margin: "0 10px" })}
`;
export const Dob = styled.div`
   font-size: 10px;
   margin-bottom: 5px;
   ${mobile({ fontSize: "13px" })}
`;
export const Pob = styled.div`
   font-size: 10px;
   ${mobile({ fontSize: "13px" })}
`;
