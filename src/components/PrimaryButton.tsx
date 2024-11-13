import { IconType } from "react-icons";

interface PrimaryButtonProps {
  text: string;
  icon?: IconType;
  theme: "dark" | "light";
  onClick?: () => void;
}

const PrimaryButton = ({
  text,
  icon: Icon,
  theme,
  onClick,
}: PrimaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-center justify-center rounded-lg px-16 py-4 border w-full capitalize ${
        theme === "dark"
          ? "bg-primary-light text-primary-dark border-primary-dark"
          : "bg-primary-dark text-primary-light  border-primary-light"
      }`}
    >
      {Icon && <Icon size={24} />}
      <p className="font-medium text-sm">{text}</p>
    </button>
  );
};

export default PrimaryButton;
