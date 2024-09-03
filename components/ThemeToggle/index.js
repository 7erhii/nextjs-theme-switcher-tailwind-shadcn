"use client";
export default function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    if (isDark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="bg-light-buttonBg dark:bg-dark-buttonBg text-white dark:text-black border-light-buttonBorder dark:border-dark-buttonBorder p-2 rounded"
    >
      Toggle Theme
    </button>
  );
}
