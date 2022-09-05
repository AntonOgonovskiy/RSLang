import React, { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Iline {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface IChartProps {
  title: string;
  labels: string[];
  datasets: Iline[];
}

export const Chart: FC<IChartProps> = ({ title, labels, datasets }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const data = {
    labels,
    datasets: datasets,
  };

  return <Line options={options} data={data} />;
};
