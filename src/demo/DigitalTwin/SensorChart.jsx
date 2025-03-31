// src/demo/DigitalTwin/SensorChart.jsx
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

export default function SensorChart({ data }) {
  const [showTemp, setShowTemp] = useState(true);
  const [showHumidity, setShowHumidity] = useState(true);

  const alertTempThreshold = 30;
  const alertHumidityThreshold = 80;

  const chartData = {
    labels: data.time,
    datasets: [
      showTemp && {
        label: "온도 (°C)",
        data: data.temperature,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        pointBackgroundColor: data.temperature.map((t) =>
          t > alertTempThreshold ? "red" : "rgb(255, 99, 132)"
        ),
      },
      showHumidity && {
        label: "습도 (%)",
        data: data.humidity,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.3,
        pointBackgroundColor: data.humidity.map((h) =>
          h > alertHumidityThreshold ? "orange" : "rgb(54, 162, 235)"
        ),
      },
    ].filter(Boolean),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#374151", // text-gray-700
          font: { size: 12, weight: "bold" },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.parsed.y;
            return `${context.dataset.label}: ${value}${context.dataset.label.includes("온도") ? "°C" : "%"}`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: { color: "#6B7280" }, // text-gray-500
      },
      y: {
        ticks: { color: "#6B7280" },
      },
    },
  };

  return (
    <div className="w-full h-[400px] space-y-4">
      <div className="flex gap-4 text-sm">
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={showTemp}
            onChange={() => setShowTemp((prev) => !prev)}
          />
          온도 표시
        </label>
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={showHumidity}
            onChange={() => setShowHumidity((prev) => !prev)}
          />
          습도 표시
        </label>
      </div>

      <Line data={chartData} options={chartOptions} />
    </div>
  );
}