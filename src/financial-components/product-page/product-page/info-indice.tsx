import { component$ } from "@builder.io/qwik";
import { Column } from "~/components/column/column";
import { Container } from "~/components/container/container";
import { Row } from "~/components/row/row";

export const InfoIndice = component$(() => {
  return (
    <Container>
      <Row>
        <Column>
          <h3>Informations sur l'Indice</h3>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>Nom complet</td>
                  <td>S&amp;P 500 Net Total Return Index</td>
                </tr>
                <tr>
                  <td> Code Bloomberg de l'indice </td>
                  <td>SPTR500N</td>
                </tr>
                <tr>
                  <td> Devise de l'indice </td>
                  <td>USD</td>
                </tr>
                <tr>
                  <td> Nombre de composants de l'indice </td>
                  <td>503</td>
                </tr>
                <tr>
                  <td> Informations supplémentaires </td>
                  <td>
                    <a rel="noreferrer" target="_blank" href="//www.spindices.com">
                      www.spindices.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <span>Données au 29/11/2022. Source : Amundi Asset Management</span>
        </Column>
        <Column></Column>
      </Row>
    </Container>
  );
});
