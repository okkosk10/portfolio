// src/demo/DigitalTwin/useSensorData.js
import { useEffect, useState } from "react";
import axios from "axios";

export default function useSensorData(latitude = 36.5, longitude = 127.9) {
  const [data, setData] = useState({ time: [], temperature: [], humidity: [] });
  const [locationName, setLocationName] = useState("알 수 없음");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      setLoading(true);
      try {
        // 1. 날씨 데이터
        const weatherRes = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m&timezone=Asia/Seoul`
        );
        const { time, temperature_2m, relative_humidity_2m } = weatherRes.data.hourly;

        setData({
          time,
          temperature: temperature_2m,
          humidity: relative_humidity_2m,
        });

        // 2. 지역 이름 가져오기 (Reverse Geocoding)
        const geoRes = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        setLocationName(geoRes.data.address?.city || geoRes.data.address?.state || "알 수 없음");

        setError(null);
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSensorData();
  }, [latitude, longitude]);

  return { data, loading, error, locationName };
}
