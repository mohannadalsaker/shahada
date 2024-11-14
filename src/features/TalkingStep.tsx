import { HiOutlineSpeakerWave } from "react-icons/hi2";
import "regenerator-runtime";
import * as images from "../config/images";
import useSpeech from "../hooks/useSpeech";
import { useContext, useEffect } from "react";
import {
  StepsContext,
  StepsContextType,
} from "../context/StepsContextProvider";
import PrimaryButton from "../components/PrimaryButton";
import { ThemContext, ThemContextType } from "../context/ThemeContextProvider";

const TalkingStep = () => {
  const { listening, speak, stopListening, startListening, isBrowserSupport } =
    useSpeech();
  const { currentStep, steps } = useContext(StepsContext) as StepsContextType;
  const { theme } = useContext(ThemContext) as ThemContextType;

  useEffect(() => {
    if (isBrowserSupport) speak(steps[currentStep]);
  }, [currentStep]);

  if (!isBrowserSupport)
    return (
      <h1 className="text-3xl max-md:text-xl font-semibold text-center text-primary-light dark:text-primary-dark ">
        your browser does not support this feature
      </h1>
    );

  return (
    <div className="flex flex-col items-center gap-14 pb-5">
      <p className="text-primary-light dark:text-primary-dark font-medium text-xl max-md:text-base capitalize">
        {listening ? "listening..." : "repeat after me"}
      </p>
      <img src={listening ? images.listeningGif : images.talkingGif} />
      <div className="flex gap-2 items-center">
        <p className="text-primary-light dark:text-primary-dark font-medium text-lg max-md:text-base">
          {steps[currentStep]}
        </p>
        <HiOutlineSpeakerWave
          size={20}
          className="text-primary-light dark:text-primary-dark"
        />
      </div>
      <div className="flex gap-3 flex-wrap items-center justify-center">
        <div>
          <PrimaryButton
            onClick={() => speak(steps[currentStep])}
            text="repeat text"
            theme={theme === "dark" ? "light" : "dark"}
          />
        </div>
        <div>
          <PrimaryButton
            onClick={() => startListening()}
            text="start speaking"
            theme={theme === "dark" ? "light" : "dark"}
          />
        </div>
        <div>
          <PrimaryButton
            onClick={() => stopListening()}
            text="stop speaking"
            theme={theme === "dark" ? "light" : "dark"}
          />
        </div>
      </div>
    </div>
  );
};

export default TalkingStep;
