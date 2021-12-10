import styled from "styled-components";

export const Container = styled.div`
   height: 100px;
`;

export const Wrapper = styled.div`
   padding: 10px 20px;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Left = styled.div`
   flex: 1;
`;

export const Logo = styled.h1`
   color: #be123c;
   font-weight: bold;
   letter-spacing: 2px;
`;

export const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

export const MenuItem = styled.div`
   color: #be123c;
   font-size: 16px;
   font-weight: bold;
   margin-left: 25px;
   padding: 5px 10px;
   cursor: pointer;
`;
