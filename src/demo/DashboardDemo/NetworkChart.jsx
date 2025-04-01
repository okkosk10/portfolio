import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function NetworkChart({ data }) {
  return (
    <div className="bg-white shadow rounded p-4 h-64">
      <h2 className="text-base font-semibold mb-2">📡 네트워크 트래픽</h2>
      <Bar
        data={{
          labels: data.map((_, i) => `채널 ${i}`),
          datasets: [
            {
              label: "KB/s",
              data: data,
              backgroundColor: "rgba(34, 197, 94, 0.6)", // green-500
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "KB/s",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
