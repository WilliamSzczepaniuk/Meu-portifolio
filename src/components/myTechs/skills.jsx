import { Flex, Text } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faCheck } from "@fortawesome/free-solid-svg-icons";
import Svg from "../../assets/IconSpinner.svg";
export const Skills = ({ icon = true, text = "" }) => {
  return (
    <Flex>
      {icon ? (
        <FontAwesomeIcon icon={faCheck} color="green" />
      ) : (
        <FontAwesomeIcon className="fa-pulse" color="red" icon={faSpinner} />
      )}
      <Text ml={2}>{text}</Text>
    </Flex>
  );
};
