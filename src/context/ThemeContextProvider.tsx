import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type ThemContextType = {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"dark" | "light">>;
  toggleTheme: () => void;
  intializeTheme: () => void;
};

const currentTheme =
  localStorage.getItem("darkMode") === "true" ? "dark" : "light";

export const ThemContext = createContext<ThemContextType | null>(null);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<"dark" | "light">(currentTheme);

  const intializeTheme = () => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ? true : false
    );
  };

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.toggle("dark", false);
      localStorage.setItem("darkMode", "false");
      setTheme("light");
    } else {
      document.documentElement.classList.toggle("dark", true);
      localStorage.setItem("darkMode", "true");
      setTheme("dark");
    }
  };

  return (
    <ThemContext.Provider
      value={{ theme, setTheme, toggleTheme, intializeTheme }}
    >
      {children}
    </ThemContext.Provider>
  );
};

export default ThemeProvider;
