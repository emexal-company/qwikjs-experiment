import { component$ } from "@builder.io/qwik";
import { Column } from "~/components/column/column";
import { Container } from "~/components/container/container";
import { Row } from "~/components/row/row";
import { ShareLabel } from "./share-label";
import { Dropdown } from "../../../components/dropdown/dropdown";
import { DropdownItem } from "~/components/dropdown/dropdown-item";
import { PropertyView } from "./property-view";
import { DocLink } from "~/financial-components/doc-link";
import { Button } from "~/components/button/button";
import { Composition } from "./composition";
import { InfoIndice } from "./info-indice";
import { ComposantsIndice } from "./composants-indice";
import { RepartitionPays } from "./repartition-pays";

export const ProductPage = component$(() => {
  return (
    <>
      <section>
        <Container>
          <Row xs="12 4 8 12 12" md="12 4 8  4  8" sm="12 4 8  4  8" lg="12 4 8  4  8">
            <Column>
              <ShareLabel mnemo="SP5" title="LYXOR S&P 500 UCITS ETF - DIST (USD)" />
            </Column>
            <Column>
              <Dropdown selected="1">
                <DropdownItem value="1">Lyxor S&P 500 UCITS ETF - Dist (USD)</DropdownItem>
                <DropdownItem value="2">Lyxor S&P 500 UCITS ETF - Dist (EUR)</DropdownItem>
              </Dropdown>
            </Column>
            <Column></Column>
          </Row>
          <Row lg="7 5 12 12" md="7 5 12 12" sm="12 12 12 12" xs="12 12 12 12">
            <Column>
              <Row lg="8 4 8 4 8 4" md="8 4 8 4 8 4" sm="7 5 7 5 7 5" xs="6 6 6 6 6 6">
                <Column>
                  <PropertyView name="Dernière VL" value="39,94  EUR"></PropertyView>
                </Column>
                <Column>
                  <PropertyView name="Performance depuis le début de l'année" value="-4,13 %"></PropertyView>
                </Column>
                <Column>
                  <PropertyView name="Encours sous gestion" value="7 444,99 M EUR"></PropertyView>
                </Column>
                <Column>
                  <PropertyView name="Frais courants" value="0,09 %"></PropertyView>
                </Column>
                <Column>
                  <PropertyView name="ISIN" value="LU0496786574"></PropertyView>
                </Column>
                <Column>
                  <PropertyView name="Politique de distribution" value="Distribution"></PropertyView>
                </Column>
              </Row>
            </Column>
            <Column>
              <Row lg="4 4 4" md="4 4 4" sm="4 4 4" xs="12 12 12">
 
                <Column>
                  <DocLink
                    icon="pdf"
                    label="Reporting mensuel"
                    href="https://www.amundietf.fr/download/70109ecc-1cbe-4126-8afe-77384ec3e4d4/KID_3_CL94516_FRA_FRA_20220601_20220601.PDF"
                  ></DocLink>
                </Column>                
                <Column>
                  <DocLink
                    icon="pdf"
                    label="Prospectus"
                    href="https://www.amundietf.fr/download/70109ecc-1cbe-4126-8afe-77384ec3e4d4/KID_3_CL94516_FRA_FRA_20220601_20220601.PDF"
                  ></DocLink>
                </Column>
                <Column> 
                  <DocLink
                    icon="pdf"
                    label="DICI"
                    href="https://www.amundietf.fr/download/70109ecc-1cbe-4126-8afe-77384ec3e4d4/KID_3_CL94516_FRA_FRA_20220601_20220601.PDF"
                  ></DocLink>
                </Column>
              </Row>
              <Row lg="12 12" md="12 12" sm="12 12" xs="12 12">
                <Column>
                  <span>Objectif d'investissement</span>
                </Column>
                <Column>
                  <p>
                    Le Lyxor S&P 500 UCITS ETF - Dist (EUR) est un ETF conforme à la directive OPCVM qui cherche à reproduire la performance de l'indice de
                    référence S&P 500 Net Total Return Index. L'indice S&P 500 Net Total Return Index est composé des 500 premières sociétés américaines dont
                    les actions sont négociées sur le New York Stock Exchange ou le Nasdaq. L'indice, calculé depuis 1957, est pondéré par la capitalisation
                    flottante. La méthodologie est disponible sur www.indices.standardandpoors.com. Les ETF Lyxor sont des fonds d'investissement cotés en
                    bourse qui procurent une exposition fidèle et bon marché à un indice de référence.
                  </p>
                  <Button variant="link">Lire la suite</Button>
                </Column>
              </Row>
            </Column>
            <Column>
              <span>Risque de perte en capital.</span>
              <span>
                Un investissement dans des fonds présente des risques, notamment le risque de perte en capital. La valeur d'un investissement est soumise
                aux fluctuations du marché, et peut donc varier tant à la baisse qu’à la hausse. Par conséquent, les souscripteurs des fonds peuvent perdre
                tout ou partie de leur capital initialement investi.
              </span>
            </Column>
            <Column>
              <span>Les performances passées ne sont pas garantes et ne préjugent en rien des performances futures.</span>
            </Column>
          </Row>
        </Container>
      </section>
      <section>
        <Composition />
        <div>
          <section>
            <div>
              <InfoIndice />
            </div>
            <div>
              <div>
                <ComposantsIndice />
              </div>
            </div>
            <div>
              <div>
                <RepartitionPays />
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
});
