import { LanguageSwitcher } from "../../shared/components/LanguageSwitcher/LanguageSwitcher";

export const Header = () => {
  return (
    <header className="py-2 h-20 bg-bg-primary w-full">
      <div className="container flex items-center justify-between h-full">
        <div>Musicfun</div>
        <div className="flex gap-5 items-center">
          {/* <LanguageSwitcher /> */}
          {/* {data ? (
          <ProfileDropdownMenu avatar={"//unsplash.it/100/100"} />
        ) : (
          <LoginButtonAndModal />
        )} */}
          <LanguageSwitcher />
          <button>2</button>
        </div>
      </div>
    </header>
  );
};
