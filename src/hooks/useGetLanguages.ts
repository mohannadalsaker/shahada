import { useEffect, useState } from "react";

const useGetLanguages = () => {
  const [languages, setLanguages] = useState<{ name: string; lang: string }[]>(
    []
  );
  const osLangs = window.speechSynthesis.getVoices();

  useEffect(() => {
    if (osLangs) {
      setLanguages(
        osLangs.reduce((acc: { name: string; lang: string }[], current) => {
          const x = acc.find((item) => item.lang === current.lang);
          if (!x) {
            return acc.concat([{ name: current.name, lang: current.lang }]);
          } else {
            return acc;
          }
        }, [])
      );
    }
  }, [osLangs]);

  return { languages };
};

export default useGetLanguages;
