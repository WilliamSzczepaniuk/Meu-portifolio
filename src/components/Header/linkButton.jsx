import { Grid } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-scroll";
export const LinkButton = ({ description }) => {
  return (
    <Grid
      _hover={{
        cursor: "pointer",
        borderStyle: "solid",
        borderBottom: "1px",
      }}
      py={"3"}
      px="0.25em"
      color={"white"}
    >
      <Link
        duration={1500}
        offset={-200}
        spy={true}
        smooth={true}
        activeClass="active"
        to={description}
        color="white"
      >
        <Text fontSize={[12, 16, 18]}>{description}</Text>
      </Link>
    </Grid>
  );
};
