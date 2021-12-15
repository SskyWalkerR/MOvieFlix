import styled from "styled-components";

export const Container = styled.div`
   width: 150px;
   height: auto;
   margin: 20px;
   background-color: white;
   /* &:hover {
      box-shadow: 0px 16px 32px rgba(221, 230, 237, 0.54);
   } */
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
   height: 60%;
`;

export const Image = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 10px;
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
   &:hover {
      color: #548ca8;
   }
   transition: all 0.2s ease-in;
`;

export const Rating = styled.div`
   color: #111827;
   font-size: 12px;
`;

export const Tag = styled.div``;
