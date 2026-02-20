import { useTranslation } from "react-i18next";
import { setLocale } from "../../utils/setLocale";
import { Flag } from "lucide-react";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleClick = () => {
    if (currentLanguage === "ru") {
      setLocale("en");
    } else {
      setLocale("ru");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="min-w-31 flex items-center gap-1 cursor-pointer justify-center h-8 font-bold bg-bg-interactive-secondary py-2 px-4 rounded-[45px]"
    >
      <Flag />
      {currentLanguage === "ru" ? <div>Русский</div> : <div>English</div>}
    </div>
  );
};
