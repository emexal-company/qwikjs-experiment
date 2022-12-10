import { WorldMapData } from "./world-map";
import * as Highcharts from 'highcharts';

export function mapOptions(series: any, tag: string): Highcharts.Options {
  return {
    chart: {
      map: WorldMapData,
      borderWidth: 0,
      backgroundColor: undefined,
    },
    title: {
      text: undefined,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    mapNavigation: {
      enabled: true,
      buttons: {
        zoomIn: {
          align: "right",
        },
        zoomOut: {
          align: "right",
        },
      },
    },
    colorAxis: {
      dataClasses: [
        {
          color: "rgba(19,64,117,0.55)",
          to: 10,
        },
        {
          from: 10,
          to: 20,
          color: "rgba(19,64,117,0.6)",
        },
        {
          from: 20,
          to: 30,
          color: "rgba(19,64,117,0.65)",
        },
        {
          from: 30,
          to: 40,
          color: "rgba(19,64,117,0.70)",
        },
        {
          from: 40,
          to: 50,
          color: "rgba(19,64,117,.75)",
        },
        {
          from: 50,
          to: 60,
          color: "rgba(19,64,117,0.8)",
        },
        {
          from: 60,
          to: 70,
          color: "rgba(19,64,117,0.85)",
        },
        {
          from: 70,
          to: 80,
          color: "rgba(19,64,117,0.90)",
        },
        {
          from: 80,
          to: 90,
          color: "rgba(19,64,117,0.95)",
        },
        {
          from: 90,
          to: 100,
          color: "rgba(19,64,117,1)",
        },
      ],
    },
    series: [
      {
        type: "map",
        data: series,
        joinBy: tag,
        animation: true,
        name: "",
        states: {
          hover: {
            color: "rgba(19,64,117,1)",
          },
        },
      },
    ],
    tooltip: {
      formatter: function (this: Highcharts.TooltipFormatterContextObject) {
        return `
          <br/>
          <span style="color: ${this.color}">${(this.point as any)[tag]}</span>:
          <b>${format(this.point.value as number, "PERCENTAGE")}</b>
          <br/>`;
      },
    },
  };
}

export function format(value: number, format: "PERCENTAGE") {
  switch (format) {
    case "PERCENTAGE":
      return `${Number(value * 100).toFixed(2)} %`;
  }
}
