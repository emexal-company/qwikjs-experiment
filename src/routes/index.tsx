import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { Button } from "~/components/button/button";
import { Column } from "~/components/column/column";
import { Container } from "~/components/container/container";
import { Dropdown } from "~/components/dropdown/dropdown";
import { DropdownItem } from "~/components/dropdown/dropdown-item";
import { Row } from "~/components/row/row";
import { SuperHeader } from "~/components/superheader/superheader";
import { TabItem } from "~/components/tabs/tabitem";
import { TabList } from "~/components/tabs/tablist";
import { TabPanel } from "~/components/tabs/tabpanel";
import { TabPanels } from "~/components/tabs/tabpanels";
import { Tabs } from "~/components/tabs/tabs";
import { TextField } from "~/components/textfield/textfield";
import { ProductPage } from "~/financial-components/product-page/product-page/product-page";

export default component$(() => {
  return (
    <>
      <ProductPage></ProductPage>
      {/* <section>
        <Tabs selected="2">
          <TabList>
            <TabItem value="1">Tab1</TabItem>
            <TabItem value="2">Tab2</TabItem>
          </TabList>
          <TabPanels>
            <TabPanel value="1">Tab1 content</TabPanel>
            <TabPanel value="2">Tab2 content</TabPanel>
          </TabPanels>
        </Tabs>
      </section> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
};

// {/* <Container>
// <Row>
//   <Column>dqsdfqsdf</Column>
//   <Column>blabla</Column>
// </Row>
// </Container>

// <section>
// <SuperHeader></SuperHeader>
// <Tabs selected="2">
//   <TabList>
//     <TabItem value="1">Tab1</TabItem>
//     <TabItem value="2">Tab2</TabItem>
//   </TabList>
//   <TabPanels>
//     <TabPanel value="1">Tab1 content</TabPanel>
//     <TabPanel value="2">Tab2 content</TabPanel>
//   </TabPanels>
// </Tabs>
// </section> */}
