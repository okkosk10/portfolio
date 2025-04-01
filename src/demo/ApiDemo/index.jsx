// src/demo/ApiDemo/index.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

export default function ApiDemo() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackList, setFeedbackList] = useState([]);
  const [status, setStatus] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [sortOrder, setSortOrder] = useState("desc");

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

    // 필드 검증
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (!message) {
      setMessageError(true);
    } else {
      setMessageError(false);
    }

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

  // 피드백 정렬
  const sortedFeedbackList = feedbackList.sort((a, b) => {
    if (sortOrder === "desc") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  // 알림 자동 숨기기
  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  }, [status]);

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/feedback/${id}`);
      fetchFeedbacks(); // 삭제 후 피드백 새로고침
    } catch (err) {
      setStatus("삭제 실패");
    }
  };

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
              className={`w-full border px-4 py-2 rounded ${nameError ? "border-red-500" : ""}`}
            />
            {nameError && <p className="text-red-500 text-sm">이름을 입력하세요.</p>}
            <textarea
              placeholder="메시지"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full border px-4 py-2 rounded ${messageError ? "border-red-500" : ""}`}
            ></textarea>
            {messageError && <p className="text-red-500 text-sm">메시지를 입력하세요.</p>}
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
          <div className="mb-4">
            <label className="mr-2">정렬 기준:</label>
            <select
              className="border px-4 py-2 rounded"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="desc">최신순</option>
              <option value="asc">오래된 순</option>
            </select>
          </div>
          <ul className="space-y-3 text-sm">
            {sortedFeedbackList.map((fb, idx) => (
              <li key={idx} className="border-b pb-2 p-3 rounded-lg shadow-sm bg-white">
                <strong>{fb.name}</strong>
                <p>{fb.message}</p>
                <p className="text-xs text-gray-500">
                  {dayjs(fb.createdAt).format("YYYY-MM-DD HH:mm")}
                </p>
                <button
                  onClick={() => handleDelete(fb.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  삭제
                </button>
              </li>
            )).reverse()}
          </ul>
        </div>
      </div>
    </div>
  );
}
