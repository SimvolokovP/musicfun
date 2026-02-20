import { NavLink } from "react-router-dom";
import { useNavItems } from "./useNavItems";

export function NavList() {
  const navItems = useNavItems();

  const navSections = [
    { items: navItems.slice(0, 1) },
    { items: navItems.slice(1, 2), hasBorder: true },
    { items: navItems.slice(2, 3), hasBorder: true },
  ];

  return (
    <nav>
      {navSections.map((section, sectionIndex) => (
        <ul
          key={sectionIndex}
          className={`flex flex-col gap-5 ${
            sectionIndex === 0 ? "pb-5" : "py-5"
          } ${section.hasBorder ? "border-t border-bg-secondary" : ""}`}
        >
          {section.items.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.href || "#"}
                className={(el) =>
                  el.isActive
                    ? "text-text-primary flex gap-4 items-center font-medium text-[18px]"
                    : "text-text-secondary flex gap-4 items-center font-medium text-[18px]"
                }
              >
                {item.icon}
                <div>{item.label}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  );
}
