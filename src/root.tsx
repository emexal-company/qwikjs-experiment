import { component$ } from "@builder.io/qwik";
import { QwikCity, RouterOutlet, ServiceWorkerRegister } from "@builder.io/qwik-city";
import { QwikPartytown } from "./components/partytown/partytown";
import { RouterHead } from "./components/router-head/router-head";

//import "./global.scss?inline"; 

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown forward={["dataLayer.push"]} />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCity>
  );
});
