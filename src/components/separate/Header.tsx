import Image from "next/image";
import Link from "next/link";
import { DarkModeSwitch } from "src/components/separate/DarkModeSwitch";

const NAVITEMS = [
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/blog",
    title: "Blog",
  },
  {
    link: "/works",
    title: "Works",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 dark:text-white bg-gray-300 dark:bg-gray-900">
      <div className="flex items-center mx-auto max-w-screen-xl">
        <h1>
          <Link href="/">
            <a>
              <Image src="/img/logo.png" alt="Gabutech" width={120} height={30} />
            </a>
          </Link>
        </h1>
        <div className="flex items-center ml-auto">
          <nav>
            <ul className="flex">
              {NAVITEMS.map((navitem) => {
                return (
                  <li key={navitem.title} className="mr-5 last:ml-0 h-20 leading-[80px]">
                    <Link href={navitem.link}>
                      <a>{navitem.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-5">
            <DarkModeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
};
