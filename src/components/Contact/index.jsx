import { Flex, Image } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Tittle } from "../Tittle";
import { ContactLink } from "./ContactLink";
export const Qualifications = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Tittle tittle="Contato" />
      <Flex flexDirection={"column"}>
        <ContactLink
          link="https://www.linkedin.com/in/william-szczepaniuk/"
          plataform="Linkedin"
          Icon={FaLinkedin}
        />
        <ContactLink
          link="https://github.com/WilliamSzczepaniuk"
          plataform="GitHub"
          Icon={FaGithub}
        />
        <ContactLink
          link="https://contate.me/WilliamSzczepaniuk"
          plataform="Whatsapp"
          Icon={FaWhatsapp}
        />
        <ContactLink
          link=""
          plataform="williamng4@outlook.com"
          Icon={FaEnvelope}
        />
      </Flex>
    </Flex>
  );
};
