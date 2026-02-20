import { NavList } from "../../shared/components/NavList/NavList";


export function Sidebar() {
  return (
    <div className="md:block hidden px-8 h-full overflow-y-auto">
      <NavList />
    </div>
  );
}
