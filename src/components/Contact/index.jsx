import { Flex, Image } from "@chakra-ui/react";
import Certificado from "../../assets/Certificado-Kenzie.png";
import { Tittle } from "../Tittle";
export const Qualifications = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Tittle tittle="Contato" />
      <Image
        pt={[10, 21, 30]}
        w={["5xl"]}
        src={Certificado}
        alt="Certificado"
      />
    </Flex>
  );
};
