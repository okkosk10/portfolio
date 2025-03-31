// MapSelector.jsx
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 🔧 마커 아이콘 깨짐 방지 설정
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function LocationMarker({ onChange }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onChange(lat, lng);
    },
  });

  return null;
}

export default function MapSelector({ latitude, longitude, onChangeLocation }) {
  return (
    <div className="h-[550px] w-full rounded-lg overflow-hidden shadow">
      <MapContainer center={[latitude, longitude]} zoom={7} scrollWheelZoom={true} className="w-full h-full">
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} />
        <LocationMarker onChange={onChangeLocation} />
      </MapContainer>
    </div>
  );
}
