import { LanguageSwitcher } from "../../shared/components/LanguageSwitcher/LanguageSwitcher";

export const Header = () => {
  return (
    <header className="py-2 h-16 md:h-20 bg-bg-primary w-full">
      <div className="container flex items-center justify-between h-full">
        <div>Musicfun</div>
        <div className="flex gap-5 items-center">
          <LanguageSwitcher />
          <button>2</button>
        </div>
      </div>
    </header>
  );
};
