import { useContext, useEffect } from "react";
import { ThemContext, ThemContextType } from "../context/ThemeContextProvider";

const useInitializeTheme = () => {
  const { intializeTheme } = useContext(ThemContext) as ThemContextType;
  useEffect(() => {
    intializeTheme();
  }, []);
};
export default useInitializeTheme;
