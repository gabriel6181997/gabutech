import Link from "next/link";
import type { VFC } from "react";

type Props = {
  totalCount: number;
};

export const Pagination: VFC<Props> = (props) => {
  const PER_PAGE = 9;

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  return (
    <ul className="flex gap-3 justify-center mt-16 text-center">
      {range(1, Math.ceil(props.totalCount / PER_PAGE)).map((number, index) => {
        return (
          <li
            key={index}
            className="block w-10 h-10 leading-10 text-center text-blue-300 hover:text-white hover:bg-blue-200 border-2 border-blue-200 transition-colors duration-300"
          >
            <Link href={`/blog/page/${number}`}>
              <a>{number}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
