import { create } from 'zustand';

export const useDashboardStore = create((set) => ({
  cpu: 0,
  memory: 0,
  network: [],
  alerts: [],

  generateRandomStats: () => {
    const cpu = Math.floor(Math.random() * 100); // 0~100%
    const memory = parseFloat((Math.random() * 8).toFixed(2)); // ✅ 숫자형으로 수정 (0 ~ 8GB)
    const network = Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000)); // KB/s

    set((state) => ({
      cpu,
      memory,
      network,
      alerts: [
        ...state.alerts.slice(-4), // 최근 5개만 유지
        {
          type: cpu > 85 ? 'warning' : 'info',
          message: cpu > 85 ? '⚠️ CPU 85% 초과' : 'ℹ️ 상태 양호',
          time: new Date().toLocaleTimeString(),
        },
      ],
    }));
  },
}));
