import { Flex, Image } from "@chakra-ui/react";
import Certificado from "../../assets/Certificado-Kenzie.png";
import { Tittle } from "../Tittle";
export const Qualifications = () => {
  return (
    <Flex
      pt={[70, 200, 200]}
      bgColor={"black"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Tittle tittle="Certificações e diplomas" />
      <Image
        id="Qualificações"
        w={["5xl"]}
        src={Certificado}
        alt="Certificado "
      />
    </Flex>
  );
};
