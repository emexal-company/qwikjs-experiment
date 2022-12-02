import { component$ } from "@builder.io/qwik";
import { Container } from "~/components/container/container";
import { Progress } from "~/components/progress/progress";
import { Row } from "~/components/row/row";
import { Column } from "../../../components/column/column";

export const ComposantsIndice = component$(() => {
  return (
    <Container>
      <Row>
        <Column>
          <h3>Répartition des composants de l'indice</h3>
        </Column>
      </Row>
      <Row>
        <div>
          <Column>
            <div>
              <h4>Répartition par secteur</h4>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>Technologies de l'information</td>
                      <td>25,92 %</td>
                      <td style="width: 100px">
                        <Progress percent={25.92}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Santé</td>
                      <td>15,32 %</td>
                      <td>
                        <Progress percent={15.32} />
                      </td>
                    </tr>
                    <tr>
                      <td>Finance</td>
                      <td>11,78 %</td>
                      <td>
                        <Progress percent={11.78}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Biens de consommation cyclique</td>
                      <td>10,36 %</td>
                      <td>
                        <Progress percent={10.36}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Industrie</td>
                      <td>8,56 %</td>
                      <td>
                        <Progress percent={8.56}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Services de communication</td>
                      <td>7,33 %</td>
                      <td>
                        <Progress percent={7.33}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Biens de consommation durable</td>
                      <td>7,07 %</td>
                      <td>
                        <Progress percent={7.07}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Énergie</td>
                      <td>5,25 %</td>
                      <td>
                        <Progress percent={5.25}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Services aux collectivités</td>
                      <td>3,01 %</td>
                      <td>
                        <Progress percent={3.01}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Autres</td>
                      <td>5,40 %</td>
                      <td>
                        <Progress percent={5.40}/>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                        <Progress percent={10}/>
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
