import React from "react";
import {
   Container,
   Icon,
   Item,
   Links,
   Right,
   Rights,
   SocialContainer,
} from "./style";
import { SiInstagram, SiGithub } from "react-icons/si";
import { FcLike } from "react-icons/fc";

const Footer = () => {
   return (
      <Container>
         <SocialContainer>
            <Icon>
               <a
                  href="https://github.com/SskyWalkerR/movieflix"
                  style={{ textDecoration: "none", color: "black" }}
               >
                  <SiGithub style={{ fontSize: "22px" }} />
               </a>
            </Icon>
            <Icon>
               <SiInstagram style={{ fontSize: "22px" }} />
            </Icon>
         </SocialContainer>
         <Links>
            <Item>Conditions of Use</Item>
            <Item>Privacy & Policy</Item>
         </Links>
         <Rights>
            <Right>
               MADE WITH <FcLike /> BY SAM
            </Right>
         </Rights>
      </Container>
   );
};

export default Footer;
