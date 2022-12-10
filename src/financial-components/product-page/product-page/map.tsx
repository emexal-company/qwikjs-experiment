import { component$, useClientEffect$, useRef } from "@builder.io/qwik";
import * as Highcharts from 'highcharts/highmaps';
import MapModule from "highcharts/modules/map";
import { mapOptions } from "./map-options";
    

export interface DataItem {
  iso: string;
  weight: number;
}

export interface MapProps {
   data: DataItem[];
}

export const WorldMap = component$((props: MapProps) => {
  const mapRef = useRef();

  const mapData = props.data.map((item) => ({
    "iso-a3": item.iso,
    value: item.weight,
    z: item.weight,
  }));

  useClientEffect$(() => {
    if (mapRef.current) {
        Highcharts.mapChart(mapRef.current as HTMLElement, mapOptions(mapData, "iso-a3"));
    }
  });

  return <div ref={mapRef}></div>;
});
