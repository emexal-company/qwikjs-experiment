import { component$ } from "@builder.io/qwik";
import { Column } from "~/components/column/column";
import { Container } from "~/components/container/container";
import { Row } from "~/components/row/row";
import { Table } from "~/components/table/table";
import { TableHead } from "~/components/table/table-head";
import { TabItem } from "~/components/tabs/tabitem";
import { TabList } from "~/components/tabs/tablist";
import { TabPanel } from "~/components/tabs/tabpanel";
import { TabPanels } from "~/components/tabs/tabpanels";
import { Tabs } from "~/components/tabs/tabs";
import { TableRow } from "../../../components/table/table-row";
import { TableHeadRow } from "../../../components/table/table-head-row";
import { TableHeadColumn } from "../../../components/table/table-head-column";
import { TableColumn } from "~/components/table/table-column";
import { StyledText } from "~/components/text/styledtext";
import { WorldMap } from "./map";

const compositonTableData1 = [
  { name: "APPLE INC", currency: "USD", value: 6.41, category: "Technologies de l'information" },
  { name: "MICROSOFT CORP", currency: "USD", value: 5.39, category: "Technologies de l'information" },
  { name: "AMAZON.COM INC", currency: "USD", value: 2.46, category: "Biens de consommation cyclique" },
];

const compositonTableData2 = [
  { name: "BNP PARIBAS", currency: "EUR", value: 5.9, category: "Finance" },
  { name: "MICROSOFT CORP", currency: "USD", value: 5.39, category: "Technologies de l'information" },
  { name: "AMAZON.COM INC", currency: "USD", value: 2.46, category: "Biens de consommation cyclique" },
];

export const CompositionTable1 = () => {
  return (
    <Table striped hover valign="middle">
      <TableHead>
        <TableRow active>
          <TableHeadColumn>Nom</TableHeadColumn>
          <TableHeadColumn>Devise</TableHeadColumn>
          <TableHeadColumn>Poids</TableHeadColumn>
          <TableHeadColumn>Secteur</TableHeadColumn>
        </TableRow>
      </TableHead>
      <tbody>
        {compositonTableData1.map((item, index) => (
          <TableRow key={index}>
            <TableColumn>{item.name}</TableColumn>
            <TableColumn>{item.currency}</TableColumn>
            <TableColumn>{`${item.value} %`}</TableColumn>
            <TableColumn>{item.category}</TableColumn>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export const CompositionTable2 = () => {
  return (
    <Table striped hover valign="middle">
      <TableHead>
        <TableRow active>
          <TableHeadColumn>Nom</TableHeadColumn>
          <TableHeadColumn>Devise</TableHeadColumn>
          <TableHeadColumn>Poids</TableHeadColumn>
          <TableHeadColumn>Secteur</TableHeadColumn>
        </TableRow>
      </TableHead>
      <tbody>
        {compositonTableData2.map((item, index) => (
          <TableRow key={index}>
            <TableColumn>{item.name}</TableColumn>
            <TableColumn>{item.currency}</TableColumn>
            <TableColumn>{`${item.value} %`}</TableColumn>
            <TableColumn>{item.category}</TableColumn>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export const Composition = component$(() => {
  return (
    <Container>
      <Row>
        <Column>
          <h2>COMPOSITION</h2>
        </Column>
        <Column>
          <p>
            Ce fonds utilise une méthode de réplication synthétique afin de répliquer la performance de l’indice. Les titres détenus par le fonds peuvent donc
            différer des titres de l’indice.
          </p>
        </Column>
        <Column>
          <Tabs selected="1">
            <TabList>
              <TabItem value="1">10 principaux composants de l'indice</TabItem>
              <TabItem value="2">10 principales lignes du panier de substitution</TabItem>
            </TabList>
            <TabPanels>
              <TabPanel value="1">
                <div>
                  <div>
                    <CompositionTable1 />
                  </div>
                  <StyledText align="end">Données au 29/11/2022. Source : Amundi Asset Management</StyledText>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div>
                  <div>
                    <CompositionTable2 />
                  </div>
                  <StyledText align="end">Données au 29/11/2022. Source : Amundi Asset Management</StyledText>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Column>
      </Row>
      <Row sm="12">
        <Column>
          <WorldMap data={[{ iso: "USA", weight: 1 }]} />
        </Column>
      </Row>
    </Container>
  );
});
