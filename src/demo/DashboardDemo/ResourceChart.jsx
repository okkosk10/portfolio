import { Line } from "react-chartjs-2";
import { useState, useEffect, useRef } from "react";

export default function ResourceChart({ title, unit, dataPoint }) {
    const [chartData, setChartData] = useState([]);
    const [labels, setLabels] = useState([]);
    const counterRef = useRef(0);
  
    useEffect(() => {
      if (typeof dataPoint !== "number") return;
  
      setChartData((prev) => {
        const updated = [...prev, dataPoint];
        return updated.length > 20 ? updated.slice(-20) : updated;
      });
  
      setLabels((prev) => {
        const updated = [...prev, counterRef.current++];
        return updated.length > 20 ? updated.slice(-20) : updated;
      });
    }, [dataPoint]);
  
    return (
      <div className="bg-white shadow rounded p-4 h-64"> {/* ✅ 고정 높이 */}
        <h2 className="text-base font-semibold mb-2">{title}</h2>
        <div className="w-full h-full">
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: title,
                  data: chartData,
                  fill: true,
                  borderColor: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  tension: 0.3,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false, // ✅ 필수
              animation: false,
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: unit,
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
      </div>
    );
  }
  