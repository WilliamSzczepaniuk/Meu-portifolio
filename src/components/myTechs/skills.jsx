import { Flex, Text } from "@chakra-ui/react";
import { FaCheck, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";
export const Skills = ({ icon = true, text = "" }) => {
  return (
    <Flex>
      {icon ? (
        <FaCheck color="green" />
      ) : (
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaSpinner icon="spinner" />
        </motion.div>
      )}
      <Text ml={2}>{text}</Text>
    </Flex>
  );
};
