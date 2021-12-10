import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
   background-color: #181818;
   height: 100vh;
   width: 100%;
   ${mobile({ height: "120vh" })}
`;

export const Wrapper = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 100%;
   margin: 0 50px;
   ${mobile({ flexDirection: "column", margin: "0" })}
`;
export const Image = styled.img`
   height: 500px;
   border-radius: 5px;

   object-fit: cover;
   ${mobile({ height: "100px", width: "80px", marginTop: "20px" })}
`;
export const InfoContainer = styled.div`
   color: #b3b3b3;
   margin-left: 100px;
   padding: 50px 50px;
   flex: 2;
   ${mobile({ marginLeft: "10px", padding: "0" })}
`;

export const Name = styled.h1`
   font-size: 50px;
   font-weight: 700;
   ${mobile({ fontSize: "30px" })}
`;

export const Biography = styled.div`
   font-size: 20px;
   margin-bottom: 25px;
   ${mobile({ fontSize: "15px" })}
`;
export const Dob = styled.div`
   font-size: 15px;
   margin-bottom: 20px;
   ${mobile({ fontSize: "13px" })}
`;
export const Pob = styled.div`
   font-size: 15px;
   ${mobile({ fontSize: "13px" })}
`;
