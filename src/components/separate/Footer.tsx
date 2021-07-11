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
    <footer className="py-4 bg-blue-200">
      <ul className="xl:container flex justify-center gap-6">
        {NAVITEMS.map((navitem) => {
          return (
            <li key={navitem.title}>
              <Link href={navitem.href}>
                <a className="hover:font-bold hover:text-blue-900 hover:underline duration-300 ">
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
