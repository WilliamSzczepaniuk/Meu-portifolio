import { Grid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ContentContext } from "../../Providers/Content";

export const LinkButton = ({ description, component }) => {
  const { updateContent } = useContext(ContentContext);
  return (
    <Grid
      onClick={() => updateContent(component)}
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
