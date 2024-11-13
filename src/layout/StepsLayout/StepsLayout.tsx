import { ReactNode } from "react";

const StepsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center h-full flex-col flex-1 gap-2 px-5">
      <h1 className="text-primary-light dark:text-primary-dark uppercase font-bold text-[64px] max-md:text-4xl">
        shahada
      </h1>
      {children}
    </div>
  );
};

export default StepsLayout;
