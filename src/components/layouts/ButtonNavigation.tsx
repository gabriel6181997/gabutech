import Link from "next/link";
import { NAVITEMS } from "src/utils/navitemutil";

export const ButtonNavigation = () => {
  return (
    <nav className="fixed bottom-0 w-full">
      <ul className="flex">
        {NAVITEMS.map((navitem) => {
          return (
            <li className="flex-1 p-[6px] font-bold text-center bg-blue-300" key={navitem.title}>
              <Link href={navitem.link}>
                <a>{navitem.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
