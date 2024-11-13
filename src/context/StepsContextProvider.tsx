import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { shahadaLanguages } from "../config/shahadaLanguages";

export type StepsContextType = {
  steps: string[];
  setSteps: Dispatch<SetStateAction<string[]>>;
  currentStep: number;
  motherLanguage: string;
  setMotherLanguage: Dispatch<SetStateAction<string>>;
  goNextStep: () => void;
  showError: boolean;
  setShowError: Dispatch<SetStateAction<boolean>>;
  showSuccess: boolean;
  setShowSuccess: Dispatch<SetStateAction<boolean>>;
  isStartUp: boolean;
  setIsStartUp: Dispatch<SetStateAction<boolean>>;
};

export const StepsContext = createContext<StepsContextType | null>(null);

const StepsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [steps, setSteps] = useState<string[]>(
    shahadaLanguages.options[1].shahada
  );
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [motherLanguage, setMotherLanguage] = useState<string>("en");
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [isStartUp, setIsStartUp] = useState<boolean>(true);

  const goNextStep = () => {
    setShowError(false);
    if (currentStep === steps.length - 1) {
      setCurrentStep(0);
      if (steps === shahadaLanguages.options[0].shahada) {
        setShowSuccess(true);
      } else {
        setMotherLanguage("ar");
        setSteps(shahadaLanguages.options[0].shahada);
      }
    } else {
      setShowSuccess(false);
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <StepsContext.Provider
      value={{
        isStartUp,
        showSuccess,
        showError,
        motherLanguage,
        steps,
        currentStep,
        setIsStartUp,
        setSteps,
        setShowSuccess,
        setShowError,
        setMotherLanguage,
        goNextStep,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};

export default StepsProvider;
