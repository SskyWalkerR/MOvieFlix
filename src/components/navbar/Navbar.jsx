import React from "react";
import { Container, Left, Logo, MenuItem, Right, Wrapper } from "./style";

const Navbar = () => {
   return (
      <Container>
         <Wrapper>
            <Left>
               <Logo>MovieFlix</Logo>
            </Left>
            <Right>
               <MenuItem>MOVIE</MenuItem>
               <MenuItem>TV SHOW</MenuItem>
            </Right>
         </Wrapper>
      </Container>
   );
};

export default Navbar;
