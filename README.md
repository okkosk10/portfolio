# Frontend Portfolio

React 기반 프론트엔드 포트폴리오입니다. 3D 시각화, 디지털 트윈, 4D 시뮬레이션, REST API 연동, 실시간 대시보드 데모를 한 곳에서 확인할 수 있도록 구성했습니다.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Three.js / React Three Fiber / Drei
- Chart.js / react-chartjs-2
- React Router
- Axios
- Leaflet / React Leaflet

## Demo Pages

| Demo | Path | Focus |
| --- | --- | --- |
| Web3D Viewer | `/demo/3d-viewer` | GLB 모델 로딩, OrbitControls 기반 3D 조작 |
| Digital Twin | `/demo/digital-twin` | Open-Meteo API, 지도 선택, 센서 데이터 차트 |
| 4D Simulation | `/demo/4d-simulation` | 시간 흐름에 따른 3D 건물 요소 시뮬레이션 |
| REST API Integration | `/demo/api-integration` | React와 외부 API 연동, 입력 검증, 응답 처리 |
| Realtime Dashboard | `/demo/dashboard` | Zustand 상태 관리, 실시간 차트, 알림 UI |

## Getting Started

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/      Shared layout components
  sections/        Main portfolio sections
  data/            Demo metadata
  demo/            Interactive demo pages
  store/           Dashboard state store
  styles/          CSS modules for portfolio sections
```

## Notes

- Demo routes are lazy-loaded so the main portfolio page stays lighter.
- 3D assets are bundled through Vite's GLB asset handling.
- The API demo uses a hosted Render service, so the first request may take a short time after inactivity.
