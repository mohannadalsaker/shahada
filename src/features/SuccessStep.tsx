import { useContext } from "react";
import PrimaryButton from "../components/PrimaryButton";
import * as images from "../config/images";
import { ThemContext, ThemContextType } from "../context/ThemeContextProvider";
import { PiCertificate } from "react-icons/pi";

const SuccessStep = () => {
  const { theme } = useContext(ThemContext) as ThemContextType;
  return (
    <div className="flex flex-col items-center gap-14">
      <p className="text-primary-light dark:text-primary-dark font-medium text-xl max-md:text-base capitalize">
        welcome to the new phase of your life
      </p>
      <img src={images.successGif} alt="" />
      <div className="flex flex-col gap-6 items-center">
        <PrimaryButton
          text="Your Certificate"
          theme={theme === "dark" ? "light" : "dark"}
          icon={PiCertificate}
        />
        <PrimaryButton
          text="Learn More"
          theme={theme === "dark" ? "dark" : "light"}
        />
      </div>
    </div>
  );
};

export default SuccessStep;
