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
} from "@chakra-ui/react";
import { FaGithub, FaReact } from "react-icons/fa";
export const Card = ({ project }) => {
  const { img, describe } = project;
  return (
    <Accordion p={8} m={"1"} w={[310, 400, 500]} allowMultiple>
      <AccordionItem
        display={"flex"}
        flexDirection={"column"}
        alignItems="center"
      >
        <Image w={44} h={12} src={img} />
        <h2>
          <AccordionButton _expanded={{ backgroundColor: "darkgray.100" }}>
            <Box>{"Mais informações"}</Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          w={"200"}
          display={"flex"}
        >
          <Text w={"100%"} textAlign={"center"} p={1}>
            {describe}
          </Text>
          <Flex alignItems={"center"} flexDirection={"column"}>
            <FaGithub size={30} />
            <Text m={1} fontSize={[12, 14, 16]}>
              Repositório
            </Text>
          </Flex>
          <Flex alignItems={"center"} flexDirection={"column"}>
            <FaReact size={30} />
            <Text fontSize={[12, 14, 16]}>Pagina</Text>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
