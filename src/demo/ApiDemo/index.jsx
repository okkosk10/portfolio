// src/demo/ApiDemo/index.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function ApiDemo() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [status, setStatus] = useState(null);

  const API_BASE_URL = "https://feedback-api-e1cs.onrender.com";

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/feedback`);
      setFeedbackList(res.data);
    } catch (err) {
      console.error("GET 오류", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;
    try {
      const res = await axios.post(`${API_BASE_URL}/feedback`, {
        name,
        message,
      });
      setStatus("저장 성공!");
      setName("");
      setMessage("");
      fetchFeedbacks();
    } catch (err) {
      setStatus("오류 발생");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 text-gray-800">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* 입력 폼 */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">📨 피드백 남기기</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              placeholder="메시지"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border px-4 py-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              제출하기
            </button>
            {status && <p className="text-sm text-green-600">{status}</p>}
          </form>
        </div>

        {/* 피드백 리스트 */}
        <div className="bg-white p-6 rounded-xl shadow overflow-auto">
          <h2 className="text-xl font-bold mb-4">🗂️ 등록된 피드백</h2>
          <ul className="space-y-3 text-sm">
            {feedbackList.map((fb, idx) => (
              <li key={idx} className="border-b pb-2">
                <strong>{fb.name}</strong>
                <p>{fb.message}</p>
                <p className="text-xs text-gray-500">
                  {dayjs(fb.createdAt).format("YYYY-MM-DD HH:mm")}
                </p>
              </li>
            )).reverse()}
          </ul>
        </div>
      </div>
    </div>
  );
}
