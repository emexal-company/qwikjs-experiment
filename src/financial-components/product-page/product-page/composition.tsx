import { component$ } from "@builder.io/qwik";
import { Column } from "~/components/column/column";
import { Container } from "~/components/container/container";
import { Row } from "~/components/row/row";
import { TabItem } from "~/components/tabs/tabitem";
import { TabList } from "~/components/tabs/tablist";
import { TabPanel } from "~/components/tabs/tabpanel";
import { TabPanels } from "~/components/tabs/tabpanels";
import { Tabs } from "~/components/tabs/tabs";

export const CompositionTable1 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Devise</th>
          <th>Poids</th>
          <th>Secteur</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>APPLE INC</td>
          <td>USD</td>
          <td>6,41 %</td>
          <td> Technologies de l'information </td>
        </tr>
        <tr>
          <td>MICROSOFT CORP</td>
          <td>USD</td>
          <td>5,39 %</td>
          <td> Technologies de l'information </td>
        </tr>
        <tr>
          <td>AMAZON.COM INC</td>
          <td>USD</td>
          <td>2,46 %</td>
          <td> Biens de consommation cyclique </td>
        </tr>
        <tr>
          <td>ALPHABET INC CL A</td>
          <td>USD</td>
          <td>1,72 %</td>
          <td> Services de communication </td>
        </tr>
        <tr>
          <td>BERKSHIRE HATHAWAY INC-CL B</td>
          <td>USD</td>
          <td>1,71 %</td>
          <td> Finance </td>
        </tr>
        <tr>
          <td>ALPHABET INC CL C</td>
          <td>USD</td>
          <td>1,54 %</td>
          <td> Services de communication </td>
        </tr>
        <tr>
          <td>UNITEDHEALTH GROUP INC</td>
          <td>USD</td>
          <td>1,48 %</td>
          <td> Santé </td>
        </tr>
        <tr>
          <td>TESLA INC</td>
          <td>USD</td>
          <td>1,45 %</td>
          <td> Biens de consommation cyclique </td>
        </tr>
        <tr>
          <td>JOHNSON JOHNSON</td>
          <td>USD</td>
          <td>1,39 %</td>
          <td> Santé </td>
        </tr>
        <tr>
          <td>EXXON MOBIL CORP</td>
          <td>USD</td>
          <td>1,39 %</td>
          <td> Énergie </td>
        </tr>
      </tbody>
    </table>
  );
};

export const CompositionTable2 = () => {
  return (
    <table>
      <thead>
        <tr>
          <th> Nom </th>
          <th> Devise </th>
          <th> Poids </th>
          <th> Secteur </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BNP PARIBAS</td>
          <td> EUR </td>
          <td> 5,90 % </td>
          <td>Finance</td>
        </tr>
        <tr>
          <td>META PLATFORMS INC-CLASS A</td>
          <td> USD </td>
          <td> 4,29 % </td>
          <td>Services de communication </td>
        </tr>
        <tr>
          <td>AMAZON.COM INC</td>
          <td> USD </td>
          <td> 3,72 % </td>
          <td>Biens de consommation cyclique</td>
        </tr>
        <tr>
          <td>ADVANCED MICRO DEVICES</td>
          <td> USD </td>
          <td> 3,69 % </td>
          <td>Technologies de l'information</td>
        </tr>
        <tr>
          <td>APPLE INC</td>
          <td> USD </td>
          <td> 3,67 % </td>
          <td>Technologies de l'information</td>
        </tr>
        <tr>
          <td>ALPHABET INC CL A</td>
          <td> USD </td>
          <td> 3,50 % </td>
          <td>Services de communication </td>
        </tr>
        <tr>
          <td>MICROSOFT CORP</td>
          <td> USD </td>
          <td> 3,41 % </td>
          <td>Technologies de l'information</td>
        </tr>
        <tr>
          <td>AXA SA</td>
          <td> EUR </td>
          <td> 3,36 % </td>
          <td>Finance</td>
        </tr>
        <tr>
          <td>CIGNA CORP</td>
          <td> USD </td>
          <td> 2,65 % </td>
          <td>Santé</td>
        </tr>
        <tr>
          <td>TOTALENERGIES SE PARIS</td>
          <td> EUR </td>
          <td> 2,45 % </td>
          <td>Énergie</td>
        </tr>
      </tbody>
    </table>
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
                    <span>Données au 29/11/2022. Source : Amundi Asset Management</span>
                  </div>
                </TabPanel>
                <TabPanel value="2">
                  <div>
                    <div>
                      <CompositionTable2 />
                    </div>
                    <span>Données au 29/11/2022. Source : Amundi Asset Management</span>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Column>
        </Row>
      </Container>
  );
});
