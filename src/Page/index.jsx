import {
  Flex,
  Box,
  ColorModeScript,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import {} from "@emotion/react";
import { Header } from "../components/Header";
import image from "../assets/myPicture.jpg";
import Typist from "react-typist";

export const Page = () => {
  return (
    <Box>
      <Header />
      <Box h={"100vh"} fontFamily={"helvetica"} w={"100vw"} bg="blackAlpha.700">
        <Flex
          alignItems={"center"}
          w={"100%"}
          h={"100%"}
          bgSize={"100% 100%"}
          bgImg={
            "https://lh3.googleusercontent.com/x4Xo-UILE0fhEshwxc29WUlSZkJ5IQqP0WtbkL_x5TmG9BAXBZe8dBjj_dM8OdeZq8ZSUnDZ0YWrZClBdlajn6QLJLiLSiAtoIKWAg=w600"
          }
        >
          <Typist
            px={"2"}
            textAlign={"center"}
            fontSize={[14, 16, 22]}
            color={"white"}
          >
            <Typist.Backspace count={8} delay={200} />
            <span>Minha jornada no mundo da tecnologia...</span>
          </Typist>
        </Flex>

        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          mt={[50, 200, 200]}
          w={"100%"}
          flex={"1"}
        >
          <Image borderRadius={"180"} w={["75%", 200, 300]} src={image} />
          <Text
            w={["90%", 300, 500]}
            fontSize={[12, 14, 20]}
            py={"2"}
            px={[12, 25, 30]}
          >
            <strong>Lorem Ipsum is simply</strong> dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
