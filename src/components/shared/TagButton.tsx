import Link from "next/link";
import type { VFC } from "react";

type Props = {
  href: string;
  title: string;
};

export const TagButton: VFC<Props> = (props) => {
  return (
    <li className="py-1 px-3 font-bold text-blue-300 hover:text-white hover:bg-blue-300 rounded-2xl shadow-md transition-colors duration-300">
      <Link href={props.href}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};
