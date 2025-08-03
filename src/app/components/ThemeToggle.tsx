"use client";

import { useState, useEffect, useRef } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [isSystemTheme, setIsSystemTheme] = useState(false);
  const isSystemThemeRef = useRef(false);

  useEffect(() => {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // If no saved theme, use system preference
    if (!savedTheme) {
      setIsSystemTheme(true);
      isSystemThemeRef.current = true;
      setIsDark(systemPrefersDark);
      if (systemPrefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Use saved theme
      setIsSystemTheme(false);
      isSystemThemeRef.current = false;
      setIsDark(savedTheme === "dark");
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (isSystemThemeRef.current) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []); // Empty dependency array to run only once

  // Monitor isDark changes and ensure CSS is applied correctly
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [isDark, isSystemTheme]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    setIsSystemTheme(false); // User manually changed theme
    isSystemThemeRef.current = false; // Update ref

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const resetToSystem = () => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDark(systemPrefersDark);
    setIsSystemTheme(true);
    isSystemThemeRef.current = true;
    localStorage.removeItem("theme"); // Remove saved theme

    if (systemPrefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      onDoubleClick={resetToSystem}
      className="p-2 rounded-xl theme-transition focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md hover:scale-105"
      style={{
        backgroundColor: "var(--secondary)",
        color: "var(--muted-foreground)",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={`Current: ${
        isSystemTheme ? "system" : isDark ? "dark" : "light"
      } mode (Double-click to reset to system)`}
    >
      {isDark ? (
        <FaSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FaMoon
          className="w-5 h-5"
          style={{ color: "var(--muted-foreground)" }}
        />
      )}
    </button>
  );
}
