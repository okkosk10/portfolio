import { useEffect, useState } from "react";

export default function ToastContainer({ latest }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (!latest) return;

    const id = Date.now();
    const toast = { id, ...latest, fadingOut: false };

    setToasts((prev) => [...prev, toast]);

    // 자동 제거 타이머 (페이드 아웃까지 고려)
    const timeout = setTimeout(() => triggerFadeOut(id), 2500);

    return () => clearTimeout(timeout);
  }, [latest]);

  // ✅ 페이드 아웃 시작
  const triggerFadeOut = (id) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, fadingOut: true } : t))
    );

    // 실제 제거 (애니메이션 끝난 뒤)
    setTimeout(() => {
      removeToast(id);
    }, 300); // fade-out 시간과 일치
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const getStyle = (type) => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-yellow-100",
          border: "border-yellow-400",
          icon: "⚠️",
        };
      case "info":
      default:
        return {
          bg: "bg-blue-100",
          border: "border-blue-400",
          icon: "ℹ️",
        };
    }
  };

  return (
    <div className="fixed bottom-6 right-6 space-y-2 z-50">
      {toasts.map((t) => {
        const { bg, border, icon } = getStyle(t.type);
        return (
          <div
            key={t.id}
            className={`relative px-4 py-2 text-sm rounded shadow border ${bg} ${border} ${
              t.fadingOut ? "animate-fade-out" : "animate-fade-in-up"
            }`}
          >
            <span className="mr-2">{icon}</span>
            <strong className="mr-2 text-gray-800">{t.time}</strong>
            <span className="text-gray-700">{t.message}</span>
          </div>
        );
      })}
    </div>
  );
}
