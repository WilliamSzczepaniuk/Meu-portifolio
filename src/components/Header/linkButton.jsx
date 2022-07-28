import { Grid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
export const LinkButton = ({ description, setActualComponent, component }) => {
  return (
    <Grid
      onClick={() => setActualComponent(component)}
      _hover={{
        color: "#6467ce",
        cursor: "pointer",
        borderStyle: "solid",
        borderBottom: "1px",
      }}
      py={"3"}
      px="0.25em"
      color={"white"}
    >
      <Text fontSize={[12, 16, 18]}>{description}</Text>
    </Grid>
  );
};
