import { component$ } from "@builder.io/qwik";
import { Column } from "~/components/column/column";
import { Container } from "~/components/container/container";
import { Row } from "~/components/row/row";
import { Table } from "~/components/table/table";
import { TableColumn } from "~/components/table/table-column";
import { TableHead } from "~/components/table/table-head";
import { TableHeadColumn } from "~/components/table/table-head-column";
import { TableRow } from "~/components/table/table-row";
import { StyledText } from "~/components/text/styledtext";

export const data = [
  { property: "Nom complet", value: "S&P 500 Net Total Return Index" },
  { property: "Code Bloomberg de lindice", value: "SPTR500N" },
  { property: "Devise de l'indice", value: "USD" },
  { property: "Nombre de composants de l'indice", value: "503" },
];

export const InfoIndice = component$(() => {
  return (
    <Container>
      <Row lg="6 6" md="6 6" sm="12 12" xs="12 12">
        <Column> 
          <h3>Informations sur l'Indice</h3>
          <div>
            <Table striped hover valign="middle">
              <tbody>
                {data.map((item) => (
                  <TableRow>
                    <TableColumn>{item.property}</TableColumn>
                    <TableColumn align="end">{item.value}</TableColumn>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </div>
          <StyledText align="end">Données au 29/11/2022. Source : Amundi Asset Management</StyledText>
        </Column>
        <Column></Column>
      </Row>
    </Container>
  );
});
