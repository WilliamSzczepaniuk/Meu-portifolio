import { Flex, Text, Image, Box } from "@chakra-ui/react";
import image from "../../assets/myPicture.jpg";
import { Grid, Img } from "@chakra-ui/react";
import { Tittle } from "../Tittle";
import { motion, useDragControls } from "framer-motion";
import { useState } from "react";

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
      <Box
        w={"500px"}
        right={[15, 50, 100]}
        top={[65, 82, 105]}
        position={"absolute"}
        gridGap={"20px"}
      >
        <motion.div
          drag
          dragConstraints={{ top: -500, left: -50, right: 50, bottom: 50 }}
        >
          <Image
            alt="Logo React"
            boxSizing="border-box"
            borderRadius={"70px"}
            w={[50, 70, 100]}
            border={"solid 3px #36315e"}
            src="data:image/png;base64,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"
          />
        </motion.div>
      </Box>

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
