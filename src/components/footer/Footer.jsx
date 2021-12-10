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
import { SiInstagram, SiFacebook, SiTwitter, SiYoutube } from "react-icons/si";
import { FcLike } from "react-icons/fc";

const Footer = () => {
   return (
      <Container>
         <SocialContainer>
            <Icon>
               <SiFacebook style={{ fontSize: "22px" }} />
            </Icon>
            <Icon>
               <SiInstagram style={{ fontSize: "22px" }} />
            </Icon>
            <Icon>
               <SiTwitter style={{ fontSize: "22px" }} />
            </Icon>
            <Icon>
               <SiYoutube style={{ fontSize: "22px" }} />
            </Icon>
         </SocialContainer>
         <Links>
            <Item>Conditions of Use</Item>
            <Item>Privacy & Policy</Item>
            <Item>Press Room</Item>
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
