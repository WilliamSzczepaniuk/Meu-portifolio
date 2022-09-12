import { Flex, Text, Image, Box } from "@chakra-ui/react";
import image from "../../assets/myPicture.jpg";
import { Tittle } from "../Tittle";
import { ListIcons } from "./ListIcons";

export const About = () => {
  return (
    <Flex
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      flexWrap={"wrap"}
      w={"100%"}
      id="Sobre"
    >
      <Tittle tittle="Um pouco sobre mim" />
      <ListIcons />
      <Image
        border={"solid 3px #36315e"}
        borderRadius={[200, 200, 200]}
        w={[130, 160, 300]}
        src={image}
      />

      <Flex
        flexDirection={"column"}
        pt={"3"}
        textAlign={"center"}
        color={"white"}
        h={[150, 200, 300]}
        w={[270, 300, 500]}
        fontSize={[12, 14, 20]}
      >
        <Text
          fontFamily={"Roboto, sans-serif"}
          fontSize={[12, 13, 16]}
          m={1}
          p={"2"}
          color="white"
        >
          Minha conexão com a tecnologia começou desde muito novo, por gostar
          muito de games, e neste meu último emprego tive contato com um sistema
          de estoque bem complexo, que me fez ponderar sobre programação, então
          comecei a buscar a forma de trabalhar com isso, me apaixonei pela área
          porque para mim o código limpo e bem escrito é algo que beira uma
          arte, pela sua complexidade e possibilidade de sempre estar
          progredindo como profissional, dependendo somente da vontade de
          estudar. Meus objetivos são fazer aplicações e designers, que tragam a
          melhor experiência para o usuário e também fazer parte de uma equipe
          que tem paixão pelo que faz e sempre dá seu melhor.
        </Text>
      </Flex>
    </Flex>
  );
};
