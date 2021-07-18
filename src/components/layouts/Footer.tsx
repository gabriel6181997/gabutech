import Link from "next/link";

const NAVITEMS = [
  {
    href: "/",
    title: "HOME",
  },
  {
    href: "/privacy",
    title: "プライバシー",
  },
  {
    href: "/disclaimer",
    title: "免責事項",
  },
];

export const Footer = () => {
  return (
    <footer className="pt-6 pb-12 md:pb-8 bg-blue-200">
      <ul className="xl:container flex gap-6 justify-center">
        {NAVITEMS.map((navitem) => {
          return (
            <li key={navitem.title}>
              <Link href={navitem.href}>
                <a className="hover:font-bold hover:text-blue-900 hover:border-b-2 hover:border-blue-900 transition-all duration-300">
                  {navitem.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
        <p className="pt-2 text-center">
          <small lang="en">© 2021 Gabutech</small>
        </p>
    </footer>
  );
};
