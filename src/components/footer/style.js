import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const SocialContainer = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 20px;
`;
export const Icon = styled.div`
   margin: 0 20px;
   cursor: pointer;
`;

export const Links = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 25px;
   ${mobile({ flexDirection: "column" })}
`;
export const Item = styled.h1`
   margin: 0 20px;
   color: #114826;
   font-size: 17px;
   font-weight: 700;
   ${mobile({ margin: "0 30px" })}
`;

export const Rights = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 50px;
`;

export const Right = styled.h1`
   margin: 0 10px;
   color: #6b7280;
   font-size: 17px;
   font-weight: 700;
   ${mobile({ fontSize: "15px" })}
`;
