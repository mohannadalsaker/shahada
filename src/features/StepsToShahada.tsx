import { useContext } from "react";
import {
  StepsContext,
  StepsContextType,
} from "../context/StepsContextProvider";
import SuccessStep from "./SuccessStep";
import TalkingStep from "./TalkingStep";
import WrongStep from "./WrongStep";
import StartUp from "./StartUp";

const StepsToShahada = () => {
  const { showError, showSuccess, isStartUp } = useContext(
    StepsContext
  ) as StepsContextType;

  return isStartUp ? (
    <StartUp />
  ) : showSuccess ? (
    <SuccessStep />
  ) : showError ? (
    <WrongStep />
  ) : (
    <TalkingStep />
  );
};

export default StepsToShahada;
