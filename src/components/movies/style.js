import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
   margin: 20px;
`;

export const Top = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Title = styled.h1`
   margin: 0 40px;
   font-size: 30px;
   color: #be123c;
   ${mobile({ fontSize: "20px" })}
`;

export const MovieContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;
