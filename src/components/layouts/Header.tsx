import Image from "next/image";
import Link from "next/link";
import { NAVITEMS } from "src/utils/navitemutil";

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-10 md:h-20 dark:text-white bg-white">
      <div className="container flex items-center mx-auto">
        <h1 className="md:py-2">
          <Link href="/">
            <a>
              <Image src="/img/logo.png" alt="Gabutech" width={120} height={30} />
            </a>
          </Link>
        </h1>
        <div className="flex items-center pr-9 ml-auto">
          <nav>
            <ul className="flex gap-10">
              {NAVITEMS.map((navitem) => {
                return (
                  <li key={navitem.title} className="hidden md:block">
                    <Link href={navitem.link}>
                      <a className="hover:text-blue-300 hover:border-b-2 hover:border-blue-300 transition-all duration-300">
                        {navitem.title}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
