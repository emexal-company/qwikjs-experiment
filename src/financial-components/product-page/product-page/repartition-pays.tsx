import { component$ } from "@builder.io/qwik";
import { Column } from "~/components/column/column";
import { Container } from "~/components/container/container";
import { Row } from "~/components/row/row";

export const RepartitionPays = component$(() => {
  return (
    <Container>
      <Row>
        <div class="map-breakdown-wrapper w-100">
          <Column>
            <h4 class="text-secondary font-size-14 mt-0 mb-3 mb-xs-0 pb-4">Répartition par pays</h4>
            <div class="m-showmore overflow-hidden" id="breakdown-scrollable-box-index-countries" style="max-height: none;">
              <table class="table breakdown-table-index-countries table-striped light-text mb-3 font-size-xs-11">
                <tbody>
                  <tr>
                    <td> États-Unis </td>
                    <td class="text-xs-right">100,00 %</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Column>
          <Column>
            <div id="index-countries-breakdown-container">MAP MAP</div>
            <span class="text-right font-size-10 text-gray-lighter-12 display-block pb-xs-4 mb-xs-1">
              Données au 29/11/2022. Source : Amundi Asset Management
            </span>
          </Column>
        </div>
      </Row>
    </Container>
  );
});
