import { useContext } from "react";
import {
  StepsContext,
  StepsContextType,
} from "../context/StepsContextProvider";

import PrimaryButton from "../components/PrimaryButton";
import { ThemContext, ThemContextType } from "../context/ThemeContextProvider";
import { shahadaLanguages } from "../config/shahadaLanguages";

const StartUp = () => {
  const { theme } = useContext(ThemContext) as ThemContextType;
  const { setMotherLanguage, motherLanguage, setSteps, setIsStartUp } =
    useContext(StepsContext) as StepsContextType;

  return (
    <div className="flex flex-col gap-5">
      <h1 className="capitalize text-center text-3xl max-md:text-xl font-semibold text-primary-light dark:text-primary-dark">
        please select your mother language
      </h1>
      <select
        onChange={(event) => {
          setMotherLanguage(event.target.value);
          setSteps(
            shahadaLanguages.options.find(
              (lang) => lang.code === event.target.value
            )?.shahada!
          );
        }}
        value={motherLanguage}
        name="language"
        aria-placeholder="Select your language"
        className="bg-primary-dark dark:bg-primary-light text-primary-primary dark:text-primary-dark py-3 px-5 border border-primary-light dark:border-primary-dark rounded-lg"
      >
        {shahadaLanguages.options.map((lang) => (
          <option key={lang.label} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <PrimaryButton
        text="Next"
        theme={theme === "dark" ? "light" : "dark"}
        onClick={() => {
          setIsStartUp(false);
        }}
      />
    </div>
  );
};

export default StartUp;
