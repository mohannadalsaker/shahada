import { useContext, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "regenerator-runtime";
import { shahadaLanguages } from "../config/shahadaLanguages";
import {
  StepsContext,
  StepsContextType,
} from "../context/StepsContextProvider";

let recognition = null;
if ("webkitSpeechRecognition" in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = "en-US";
}
const useSpeech = () => {
  const { motherLanguage, setShowError, steps, goNextStep, currentStep } =
    useContext(StepsContext) as StepsContextType;
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const currentLang = shahadaLanguages.options.find(
    (lang) => lang.code === motherLanguage
  );

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: motherLanguage,
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = motherLanguage;
    window.speechSynthesis.speak(utterance);
  };

  const handleResponse = () => {
    let response = "";

    if (transcript.toLowerCase().includes(steps[currentStep].toLowerCase()!)) {
      stopListening();
      response = currentLang?.congrats!;
      goNextStep();
    } else {
      stopListening();
      resetTranscript();
      setShowError(true);
    }

    if (response) {
      speak(response);
    }

    resetTranscript();
  };

  useEffect(() => {
    if (transcript && transcript === transcript.toLowerCase()) {
      handleResponse();
    }
  }, [transcript]);

  return {
    transcript,
    listening,
    currentLang,
    speak,
    startListening,
    stopListening,
  };
};
export default useSpeech;
