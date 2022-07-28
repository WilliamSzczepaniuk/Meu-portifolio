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
    <Accordion p={8} m={"1"} w={[310, 400, 500]} allowMultiple>
      <AccordionItem
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
      >
        <Image w={[40,43,44]} h={[10,12,14]} src={img} />
        <h2>
          <AccordionButton _expanded={{ backgroundColor: "darkgray.100" }}>
            <Box color={"white"}>{"Sobre"}</Box>
            <AccordionIcon color={"white"} />
          </AccordionButton>
        </h2>
        <AccordionPanel
          color={"white"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          w={"200"}
          display={"flex"}
        >
          <Text fontSize={[12,14,16]} flexFlow={1} textAlign={"center"} p={1}>
            {describe}
          </Text>
          <Flex alignItems={"center"} flexDirection={"column"}>
            <FaGithub size={30} />
            <Link href={gitLink} isExternal m={1} fontSize={[12, 14, 16]}>
              Repositório
            </Link>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"}>
            <FaReact size={30} />
            <Link href={siteLink} fontSize={[12, 14, 16]}>
              Pagina
            </Link>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
