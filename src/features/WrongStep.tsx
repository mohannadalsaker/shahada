import { useContext } from "react";
import * as images from "../config/images";
import {
  StepsContext,
  StepsContextType,
} from "../context/StepsContextProvider";
import PrimaryButton from "../components/PrimaryButton";
import { ThemContext, ThemContextType } from "../context/ThemeContextProvider";

const WrongStep = () => {
  const { currentStep, steps, setShowError } = useContext(
    StepsContext
  ) as StepsContextType;
  const { theme } = useContext(ThemContext) as ThemContextType;

  return (
    <div className="flex flex-col items-center gap-14">
      <p className="text-primary-light dark:text-primary-dark font-medium text-xl max-md:text-base">
        you spoke this one wrong
      </p>
      <img src={images.wrongGif} alt="" />
      <p className="text-red-500 font-medium text-lg max-md:text-base">
        {steps[currentStep]}
      </p>
      <PrimaryButton
        onClick={() => setShowError(false)}
        text="try again"
        theme={theme === "dark" ? "light" : "dark"}
      />
    </div>
  );
};

export default WrongStep;
