import { useEffect, useRef, useState } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import ResourceChart from "./ResourceChart";
import NetworkChart from "./NetworkChart";
import StatsCard from "./StatsCard";
import AlertList from "./AlertList";
import ToastContainer from "./ToastContainer";

export default function DashboardDemo() {
  const { cpu, memory, network, alerts, generateRandomStats } = useDashboardStore();
  const [latestAlert, setLatestAlert] = useState(null);
  const prevCountRef = useRef(alerts.length);

  useEffect(() => {
    generateRandomStats();
    const interval = setInterval(() => {
      generateRandomStats();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (alerts.length > prevCountRef.current) {
      const last = alerts[alerts.length - 1];
      setLatestAlert(last);
      prevCountRef.current = alerts.length;
    }
  }, [alerts]);

  return (
    <div className="min-h-screen overflow-hidden bg-gray-100 text-gray-800 px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-4rem)]">
        
        {/* 왼쪽: 대시보드 UI */}
        <div className="w-full lg:w-2/3 h-full space-y-6">
          {/* 실시간 차트 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResourceChart title="CPU 사용률" unit="%" dataPoint={cpu} />
            <ResourceChart title="메모리 사용량" unit="GB" dataPoint={memory} />
            <NetworkChart data={network} />
          </div>

          {/* 요약 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsCard title="CPU 사용률" value={`${cpu}%`} icon="🧠" />
            <StatsCard title="메모리" value={`${memory} GB`} icon="💾" />
            <StatsCard title="네트워크 채널" value={`${network.length}개`} icon="🌐" />
          </div>

          {/* 알림 로그 */}
          <AlertList alerts={alerts} />
        </div>

        {/* 오른쪽: 기술 스택 및 시나리오 설명 */}
        <div className="w-full lg:w-1/3 h-full overflow-y-auto bg-white rounded-xl shadow p-6 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-blue-700">가상 대시보드 시스템</h1>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700">🛠️ 사용 기술 스택</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>React + Vite</li>
              <li>TailwindCSS</li>
              <li>Zustand – 상태 관리</li>
              <li>Chart.js + react-chartjs-2 – 실시간 차트</li>
              <li>Toast UI – 실시간 알림 표시</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 pt-2">📊 대시보드 시나리오</h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              이 데모는 상태 관리와 퍼포먼스 최적화를 반영한 실시간 대시보드 UI 구현 예제입니다.
              CPU, 메모리, 네트워크 상태는 주기적으로 갱신되며, 차트와 요약 카드로 시각화됩니다.
              경고 수준을 초과할 경우 실시간 알림이 등록되며, 우측 하단에 Toast 형태로 팝업이 표시됩니다.
              모든 알림은 자동 사라지고, 전체 로그 패널에서도 확인할 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* Toast 알림 UI */}
      <ToastContainer latest={latestAlert} />
    </div>
  );
}
