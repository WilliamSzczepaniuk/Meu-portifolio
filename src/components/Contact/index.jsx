import { Flex } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Tittle } from "../Tittle";
import { ContactLink } from "./ContactLink";
export const Qualifications = () => {
  return (
    <Flex
      m={[8, 9, 10]}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Tittle tittle="Contato" />
      <Flex mt={[7, 8, 9]} flexDirection={"column"}>
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
