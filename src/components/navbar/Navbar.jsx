import React from "react";
import { Link } from "react-router-dom";
import { Container, Left, Logo, MenuItem, Right, Wrapper } from "./style";

const Navbar = () => {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Link style={{ textDecoration: "none" }} to="/">
                  <Logo>MovieFlix</Logo>
               </Link>
            </Left>
            <Right>
               <Link style={{ textDecoration: "none" }} to="/">
                  <MenuItem>MOVIE</MenuItem>
               </Link>
               <Link style={{ textDecoration: "none" }} to="/show">
                  <MenuItem>SHOW</MenuItem>
               </Link>
            </Right>
         </Wrapper>
      </Container>
   );
};

export default Navbar;
