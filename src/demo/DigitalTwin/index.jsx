// src/demo/DigitalTwin/index.jsx
import { useState, useMemo } from "react";
import useSensorData from "./useSensorData";
import SensorChart from "./SensorChart";
import MapSelector from "./MapSelector";
import locationList from "./locationList";

export default function DigitalTwin() {
  const [location, setLocation] = useState({ lat: 37.57, lon: 126.98 });
  const [selectedName, setSelectedName] = useState("");
  const { data, loading, error, locationName } = useSensorData(location.lat, location.lon);

  const alerts = [];
  if (!loading && !error) {
    const { temperature, humidity } = data;
  
    if (temperature.length > 0) {
      const lastTemp = temperature[temperature.length - 1];
      if (lastTemp > 33) alerts.push("⚠️ 고온 주의: 현재 기온이 33℃를 초과했습니다.");
      if (lastTemp < 5) alerts.push("🥶 저온 주의: 현재 기온이 5℃ 미만입니다.");
    }
  
    if (humidity.length > 0) {
      const lastHum = humidity[humidity.length - 1];
      if (lastHum < 30) alerts.push("💧 습도 부족: 상대 습도가 30% 미만입니다.");
      if (lastHum > 80) alerts.push("💦 고습 주의: 상대 습도가 80%를 초과했습니다.");
    }
  }

  const handleLocationChange = (lat, lon) => {
    setLocation({ lat, lon });

    const match = locationList.find(
      (loc) => Math.abs(loc.lat - lat) < 0.01 && Math.abs(loc.lon - lon) < 0.01
    );
    if (match) {
      setSelectedName(match.name);
    } else {
      setSelectedName("");
    }
  };

  const handleSelectChange = (e) => {
    const selected = locationList.find((loc) => loc.name === e.target.value);
    if (selected) {
      setLocation({ lat: selected.lat, lon: selected.lon });
      setSelectedName(selected.name);
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-100 text-gray-800" style={{ paddingBottom: "10px" }}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* 설명 */}
        <section className="text-center">
          <h1 className="text-3xl font-bold text-blue-700 mb-2">디지털 트윈 시각화</h1>
          <p className="text-gray-600 leading-relaxed">
            Open-Meteo API를 활용하여 <strong>실시간 기상 데이터</strong>를 시각화합니다.<br />
            지도 또는 드롭다운으로 위치를 선택하면, 해당 지역의 <strong>온도/습도</strong> 정보를 확인할 수 있습니다.
          </p>
        </section>

        {/* 지도 + 센서 시각화 */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* 위치 선택 */}
          <div>
            <h2 className="text-lg font-semibold text-blue-700 mb-2">위치 선택</h2>

            <select
              value={selectedName}
              onChange={handleSelectChange}
              className="w-full mb-4 px-4 py-2 border rounded text-sm shadow focus:outline-none"
            >
              <option value="">지역 선택</option>
              {locationList.map((loc) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                </option>
              ))}
            </select>

            <MapSelector
              latitude={location.lat}
              longitude={location.lon}
              onChangeLocation={handleLocationChange}
            />
          </div>

          {/* 센서 데이터 */}
          <div className="h-[640px] flex flex-col justify-start bg-white rounded-xl shadow p-6 overflow-hidden">
            <h2 className="text-lg font-semibold text-blue-700 mb-2">센서 데이터</h2>
            <p className="text-sm text-gray-600 mb-3">
              선택된 지역: <strong className="text-blue-700">{locationName}</strong>
            </p>

            {/* 알림 메시지 영역 */}
            {!loading && !error && (
              <div className="mb-4 space-y-2 max-h-[100px] overflow-y-auto pr-1">
                {alerts.length === 0 ? (
                  <div className="text-sm text-gray-500">특이사항 없음</div>
                ) : (
                  alerts.map((alert, idx) => (
                    <div
                      key={idx}
                      className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded border border-red-200"
                    >
                      ⚠️ {alert}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* 센서 차트 영역 */}
            <div className="flex-1 overflow-y-auto pr-1">
              {loading ? (
                <div className="text-center text-sm text-gray-500 animate-pulse">
                  데이터를 불러오는 중입니다...
                </div>
              ) : error ? (
                <div className="text-center text-red-600">{error}</div>
              ) : (
                <SensorChart data={data} />
              )}
            </div>
          </div>
        </section>

        {/* 출처 */}
        <section className="text-center text-sm text-gray-500 leading-relaxed mt-5">
          <p>
            실제 IoT 센서를 활용한 디지털 트윈 환경을 가정하여 시각화한 예시입니다.
            <br />
            출처:{" "}
            <a
              href="https://open-meteo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Open-Meteo API
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
