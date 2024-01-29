import React from "react";
import "./App.css";
import { Badge, Box, VStack } from "@chakra-ui/react";
import InputContainer from "./components/InputContainer";
import ListAllItems from "./components/ListAllItems";
import { Domain } from "./api";
import { useStore } from "./context";

function App() {
  const { domains } = useStore();

  return (
    <VStack mt={2}>
      {domains?.map((data: Domain) => (
        <Item key={data.id} data={data} />
      ))}
    </VStack>
  );
}

const Item = ({ data }: { data: Domain }) => {
  return (
    <Box w="100%" p={4} shadow={"md"} position={"relative"}>
      {data.deletedAt && (
        <Badge
          position={"absolute"}
          right={0}
          top={0}
          colorScheme="purple"
          p={1}
          zIndex={10}
        >
          Resolved
        </Badge>
      )}
      <InputContainer data={data} />
      <ListAllItems data={data} />
    </Box>
  );
};

export default App;
