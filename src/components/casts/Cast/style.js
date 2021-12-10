import styled from "styled-components";

export const Container = styled.div`
   flex: 1;
   min-width: 200px;
   margin: 40px;
   background-color: white;
   &:hover {
      box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.54);
   }
   cursor: pointer;
   transition: all 0.2s ease-in;
`;

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const ImageContainer = styled.div`
   width: 100%;
   height: 300px;
`;

export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`;

export const InfoContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px;
`;

export const Origin = styled.div`
   color: #9ca3af;
`;

export const Title = styled.h1`
   font-size: 18px;
   color: #111827;
   font-weight: 700;
`;

export const Rating = styled.div`
   color: #111827;
   font-size: 12px;
`;

export const Tag = styled.div``;
