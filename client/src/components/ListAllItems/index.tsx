import {
  Box,
  Collapse,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ListAllItems = () => {
  const [show, setShow] = useState(false);

  return (
    <Tabs size="md" variant="enclosed">
      <TabList>
        <Tab fontSize={"xs"} p={2} py={1} onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel p={2} pb={0}>
          <Collapse in={show} animateOpacity>
            <Box>
              <SingleTag />
              <SingleTag />
              <SingleTag />
              <SingleTag />
            </Box>
          </Collapse>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const SingleTag = () => {
  return (
    <Tag size={"md"} borderRadius="full" variant="solid" pb={0.9} m={0.5}>
      <TagLabel>Green</TagLabel>
    </Tag>
  );
};

export default ListAllItems;