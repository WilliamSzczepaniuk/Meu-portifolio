import { Grid, Text } from "@chakra-ui/react";
export const LinkButton = ({ description }) => {
  return (
    <Grid
      _hover={{
        opacity: "100%",
        cursor: "pointer",
        borderStyle: "solid",
        borderBottom: "1px",
      }}
      py={"3"}
      px="0.25em"
    >
      <Text fontSize={[12, 16, 22]}>{description}</Text>
    </Grid>
  );
};
