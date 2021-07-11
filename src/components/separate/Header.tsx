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
    <header className="fixed top-0 right-0 left-0 z-50 dark:text-white bg-white dark:bg-gray-900">
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
                  <li
                    key={navitem.title}
                    className="relative hover:after:absolute hover:after:top-[65%] hover:after:left-0 mr-10 last:ml-0 hover:even:after:w-9 hover:after:w-11 h-20 hover:after:h-[2px] leading-[80px] hover:text-blue-300 hover:after:bg-blue-300 duration-300 hover:after:-translate-y-2/4"
                  >
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
