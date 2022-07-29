import { Flex, Text, Link } from "@chakra-ui/react";

export const ContactLink = ({ Icon, plataform, link }) => {
  return (
    <Flex m={[1, 2, 3]} alignItems={"center"}>
      <Icon color="white" size="30px" />
      <Link
        isExternal
        href={link ? link : null}
        _hover={{ color: "#6467ce" }}
        ml={2}
        color={"white"}
      >
        {plataform}
      </Link>
    </Flex>
  );
};
