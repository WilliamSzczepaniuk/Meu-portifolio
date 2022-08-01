import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Image,
  Text,
  Flex,
  Link,
} from "@chakra-ui/react";

import { FaGithub, FaReact } from "react-icons/fa";
export const Card = ({ project }) => {
  const { img, describe, gitLink, siteLink } = project;
  return (
    <Accordion p={5} m={"1"} w={[310, 400, 500]} allowMultiple>
      <AccordionItem
        fontFamily={"Roboto, sans-serif"}
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
      >
        <Image
          m={1}
          minH={[20, 25, "48px"]}
          minW={[30, 35, 40]}
          maxH={[9, 10, 12]}
          src={img}
        />
        <h2>
          <AccordionButton mt={3} _expanded={{ backgroundColor: "#36315e" }}>
            <Box color={"white"}>{"Sobre"}</Box>
            <AccordionIcon color={"white"} />
          </AccordionButton>
        </h2>
        <AccordionPanel
          color={"white"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          alignItems="flex-start"
          w={"200"}
          display={"flex"}
        >
          <Text
            height={"100px"}
            fontSize={[12, 14, 16]}
            w="100%"
            textAlign={"center"}
          >
            {describe}
          </Text>
          <Flex alignItems={"center"} flexDirection={"column"}>
            <FaGithub size={25} />
            <Link href={gitLink} isExternal m={1} fontSize={[12, 14, 16]}>
              Repositório
            </Link>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"}>
            <FaReact size={25} />
            <Link href={siteLink} fontSize={[12, 14, 16]}>
              Pagina
            </Link>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
