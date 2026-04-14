import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, #8B6914, #C9A84C, #E8D5A3)",
        zIndex: 9999,
        transition: "width 0.1s linear",
      }}
    />
  );
}
