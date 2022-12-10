import { component$ } from "@builder.io/qwik";
import { Container } from "~/components/container/container";
import { Progress } from "~/components/progress/progress";
import { Row } from "~/components/row/row";
import { Table } from "~/components/table/table";
import { TableRow } from "~/components/table/table-row";
import { Column } from "../../../components/column/column";
import { TableColumn } from '../../../components/table/table-column';

export const data = [
  { property: "Technologies de l'information", value: 25.92 },
  { property: "Santé", value: 15.32 },
  { property: "Finance", value: 11.78 },
];

export const ComposantsIndice = component$(() => {
  return (
    <Container>
      <Row>
        <Column>
          <h3>Répartition des composants de l'indice</h3>
        </Column>
      </Row>
      <Row lg="6 6" md="6 6" sm="6 6" xs="12 12">
        <div>
          <Column>
            <div>
              <h4>Répartition par secteur</h4>
              <div>
                <Table striped hover valign="middle">
                  <tbody>
                    {data.map((item, index) => (
                      <TableRow key={index}>
                        <TableColumn>{item.property}</TableColumn>
                        <TableColumn>{item.value} %</TableColumn>
                        <TableColumn>
                          <Progress value={item.value} />
                        </TableColumn>
                      </TableRow>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </Column>
          <Column>
            <div>
              <h4>Répartition par devise</h4>
              <div id="breakdown-scrollable-box-index-currencies">
                <table>
                  <tbody>
                    <tr>
                      <td>USD</td>
                      <td>100,00 %</td>
                      <td style="width: 100px">
                        <Progress value={10} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Column>
        </div>
      </Row>
    </Container>
  );
});
