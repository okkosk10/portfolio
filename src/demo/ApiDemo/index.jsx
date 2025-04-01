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

    if (!name) setNameError(true);
    else setNameError(false);

    if (!message) setMessageError(true);
    else setMessageError(false);

    if (!name || !message) return;

    try {
      await axios.post(`${API_BASE_URL}/feedback`, { name, message });
      setStatus("저장 성공!");
      setName("");
      setMessage("");
      fetchFeedbacks();
    } catch (err) {
      setStatus("오류 발생");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/feedback/${id}`);
      fetchFeedbacks();
    } catch (err) {
      setStatus("삭제 실패");
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const sortedFeedbackList = feedbackList.sort((a, b) => {
    if (sortOrder === "desc") return new Date(b.createdAt) - new Date(a.createdAt);
    else return new Date(a.createdAt) - new Date(b.createdAt);
  });

  return (
    <div className="min-h-screen overflow-hidden bg-gray-100 text-gray-800 px-6 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 h-[calc(100vh-4rem)]">

        {/* 왼쪽: 피드백 폼 + 리스트 */}
        <div className="w-full lg:w-2/3 h-full bg-white rounded-xl shadow-xl p-6 flex flex-col gap-6 overflow-y-auto">
          {/* 입력 폼 */}
          <div>
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
          <div className="flex-1 overflow-auto">
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
                    className="text-red-500 hover:text-red-700 text-xs mt-1"
                  >
                    삭제
                  </button>
                </li>
              )).reverse()}
            </ul>
          </div>
        </div>

        {/* 오른쪽: 정보 패널 */}
        <div className="w-full lg:w-1/3 h-full overflow-y-auto bg-white rounded-xl shadow p-6 space-y-6">
          {/* 타이틀 */}
          <h1 className="text-2xl font-bold text-blue-700">RESTful API 연동 예시</h1>

          {/* 기술 스택 */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">🛠️ 사용 기술 스택</h2>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              <li>React 19 + Vite</li>
              <li>TailwindCSS</li>
              <li>Axios (API 호출)</li>
              <li>Express (백엔드 서버)</li>
              <li>Node.js</li>
              <li>Render (서버 배포)</li>
            </ul>
          </div>

          {/* 시나리오 설명 */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 pt-2">📄 프로젝트 시나리오</h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              이 예제는 React 프론트엔드와 Express 백엔드 간의 RESTful API 연동을 보여줍니다.
              사용자는 이름과 메시지를 입력하여 피드백을 남길 수 있으며,
              입력된 피드백은 서버에 저장되고 리스트에 실시간으로 반영됩니다.
              또한, 피드백 삭제 기능과 정렬 기능, 입력 검증 및 알림 표시 기능을 포함하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
