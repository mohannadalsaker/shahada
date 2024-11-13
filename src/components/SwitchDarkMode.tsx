import { MdLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import { useContext } from "react";
import { ThemContext, ThemContextType } from "../context/ThemeContextProvider";

const SwitchDarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemContext) as ThemContextType;
  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? (
        <MdNightlightRound size={20} className="text-primary-light" />
      ) : (
        <MdLightMode size={20} className="text-primary-dark" />
      )}
    </button>
  );
};

export default SwitchDarkMode;
