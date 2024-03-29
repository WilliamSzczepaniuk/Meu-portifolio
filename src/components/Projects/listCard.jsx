import { Card } from "../Projects/card.jsx";
import { Flex } from "@chakra-ui/react";
export const ListCard = ({ arrayProjects }) => {
  return (
    <Flex justifyContent={"center"} w={[250, "100%", "100%"]} flexWrap={"wrap"}>
      {arrayProjects.map((project) => (
        <Card key={project.name} project={project} />
      ))}
    </Flex>
  );
};
