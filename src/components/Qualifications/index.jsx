import { Flex, Image } from "@chakra-ui/react";
import Certificado from "../../assets/Certificado-Kenzie.png";
import { Tittle } from "../Tittle";
export const Qualifications = () => {
  return (
    <Flex
      id="Qualificações"
      bgColor={"black"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Tittle tittle="Certificações e diplomas" />
      <Image
        pt={[10, 21, 30]}
        w={["5xl"]}
        src={Certificado}
        alt="Certificado "
      />
    </Flex>
  );
};
