import { IconAnimated } from "./IconAnimated";
import logoJavascript from "../../assets/logo-javascript.svg";
import logoReact from "../../assets/logoreact.png";
import { Flex } from "@chakra-ui/react";

export const ListIcons = () => {
  const array = [logoJavascript, logoReact];

  return (
    <Flex
      w={["100%", 350, "60%"]}
      top={[85, 110, 105]}
      position={"absolute"}
      justifyContent={"space-between"}
    >
      {array.map((icon) => (
        <IconAnimated image={icon} />
      ))}
    </Flex>
  );
};
