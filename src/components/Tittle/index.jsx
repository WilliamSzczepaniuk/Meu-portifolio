import { Heading } from "@chakra-ui/react";

export const Tittle = ({ tittle }) => {
  return (
    <Heading
      letterSpacing={"3px"}
      fontWeight={"light"}
      fontFamily="Roboto, sans-serif"
      color={"#FFFFFF"}
      my={[5, 7, 8]}
      h={[10, 12, 14]}
      px={[2, 4, 6]}
      py={[2, 3, 4]}
      w={"100%"}
      fontSize={[14, 16, 30]}
      textAlign="center"
    >
      {"<" + tittle + "/>"}
    </Heading>
  );
};
