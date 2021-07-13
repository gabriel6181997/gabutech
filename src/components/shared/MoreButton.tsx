import Link from "next/link";
import type { VFC } from "react";

type Props = {
  href: string;
}

export const MoreButton: VFC<Props> = (props) => {
  return (
    <Link href={props.href}>
      <a className="inline-block p-3 py-3 px-10 font-bold tracking-widest text-blue-300 hover:text-white bg-white hover:bg-blue-300 rounded-xl shadow-md transition-colors duration-300">
        MORE
      </a>
    </Link>
  );
};
