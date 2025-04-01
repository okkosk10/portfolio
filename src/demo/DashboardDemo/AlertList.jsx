export default function AlertList({ alerts }) {
    return (
      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-semibold mb-2">🔔 실시간 알림</h2>
        <ul className="text-sm text-gray-600 space-y-1">
          {alerts.slice().reverse().map((a, i) => (
            <li key={i}>
              <strong>{a.time}</strong>: {a.message}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  