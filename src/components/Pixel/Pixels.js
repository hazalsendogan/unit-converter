import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
} from "@chakra-ui/react";
import PxRem from "./PxRem";
import RemPx from "./RemPx";

export default function Pixels() {
  return (
    <div>
      <Tabs colorScheme="pink">
        <TabList>
          <Tab>Px to Rem</Tab>
          <Tab>Rem to Px</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PxRem></PxRem>
          </TabPanel>
          <TabPanel>
            <RemPx/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
