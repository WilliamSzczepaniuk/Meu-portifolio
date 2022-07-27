import { Flex, Text, Image } from "@chakra-ui/react";
import image from "../../assets/myPicture.jpg";
import { Tittle } from "../Tittle";
export const About = () => {
  return (
    <Flex
      flexDir={"column"}
      bg={"black"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      w={"100%"}
      flex={"1"}
      id="Sobre"
    >
      <Tittle tittle="Um pouco sobre mim" />
      <Image
        pt={[10, 20, 30]}
        borderRadius={[200, 200, 380]}
        w={[130, 160, 300]}
        src={image}
      />
      <Flex
        flexDirection={"column"}
        pt={"3"}
        textAlign={"center"}
        color={"white"}
        h={[150, 200, 300]}
        w={[200, 300, 500]}
        fontSize={[12, 14, 20]}
      >
        <Text m={1} bgColor={"darkgray.100"} borderRadius={"10"} p={"1"}>
          Desenvolvedor front-end{" "}
        </Text>
        <Text m={1} borderRadius={"10"} bgColor={"darkgray.100"} p={"1"}>
          Buscando conhecimento{" "}
        </Text>
        <Text m={1} borderRadius={"10"} bgColor={"darkgray.100"} p={"1"}>
          Estudante apaixonado pela tecnologia
        </Text>
      </Flex>
    </Flex>
  );
};
