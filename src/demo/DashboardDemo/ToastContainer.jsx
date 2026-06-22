import { useCallback, useEffect, useState } from "react";

export default function ToastContainer({ latest }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const triggerFadeOut = useCallback((id) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, fadingOut: true } : toast
      )
    );

    setTimeout(() => {
      removeToast(id);
    }, 300);
  }, [removeToast]);

  useEffect(() => {
    if (!latest) return;

    const id = Date.now();
    const toast = { id, ...latest, fadingOut: false };

    setToasts((prev) => [...prev, toast]);

    const timeout = setTimeout(() => triggerFadeOut(id), 2500);
    return () => clearTimeout(timeout);
  }, [latest, triggerFadeOut]);

  const getStyle = (type) => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-yellow-100",
          border: "border-yellow-400",
          icon: "!",
        };
      case "info":
      default:
        return {
          bg: "bg-blue-100",
          border: "border-blue-400",
          icon: "i",
        };
    }
  };

  return (
    <div className="fixed bottom-6 right-6 space-y-2 z-50">
      {toasts.map((toast) => {
        const { bg, border, icon } = getStyle(toast.type);
        return (
          <div
            key={toast.id}
            className={`relative px-4 py-2 text-sm rounded shadow border ${bg} ${border} ${
              toast.fadingOut ? "animate-fade-out" : "animate-fade-in-up"
            }`}
          >
            <span className="mr-2">{icon}</span>
            <strong className="mr-2 text-gray-800">{toast.time}</strong>
            <span className="text-gray-700">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
}
