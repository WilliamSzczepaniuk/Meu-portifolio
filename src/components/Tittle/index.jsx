import { Heading } from "@chakra-ui/react";

export const Tittle = ({ tittle }) => {
  return (
    <Heading
      mb={5}
      mt={5}
      h={[10, 12, 14]}
      bg="darkgray.100"
      px={[2, 4, 6]}
      py={[2, 3, 4]}
      w={"100%"}
      fontSize={[14, 16, 20]}
    >
      {tittle}
    </Heading>
  );
};
