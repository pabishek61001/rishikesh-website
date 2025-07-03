import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    // Sync theme with <html class="dark">
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // On first load, read theme from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        if (stored === "dark") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded bg-zinc-200 dark:bg-zinc-800 text-sm text-zinc-800 dark:text-zinc-100"
        >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
    );
};

export default ThemeToggle;
