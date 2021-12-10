import styled from "styled-components";

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
   font-size: ${(props) => (props.direction === "left" ? "30px" : "16px")};
   color: ${(props) => props.direction === "right" && "#BE123C"};
   cursor: ${(props) => props.direction === "right" && "pointer"};
`;

export const MovieContainer = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;
