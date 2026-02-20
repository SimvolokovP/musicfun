import { useNavItems } from "@/shared/components/NavList/useNavItems";
import { NavLink } from "react-router-dom";

export const MobileBar = () => {
  const navItems = useNavItems();

  const mobileItems = navItems.slice(0, 4);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-bg-primary border-t border-bg-secondary md:hidden z-50">
      <ul className="flex justify-around items-center h-16">
        {mobileItems.map((item) => (
          <li key={item.id} className="flex-1">
            <NavLink
              to={item.href || "#"}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2 ${
                  isActive ? "text-text-primary" : "text-text-secondary"
                }`
              }
            >
              <span className="w-6 h-6">{item.icon}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
