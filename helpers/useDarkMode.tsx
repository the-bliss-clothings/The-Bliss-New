import { useState, useEffect } from "react";

type Mode = "dark" | "light";

function useDarkMode(storageKey: string = "darkMode"): [Mode, () => void] {
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem(storageKey) as Mode;
      return storedMode ? storedMode : "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const root = window.document.documentElement;
      if (mode === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem(storageKey, mode);
    }
  }, [mode, storageKey]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return [mode, toggleMode];
}

export default useDarkMode;
