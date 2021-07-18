/* eslint-disable @next/next/no-html-link-for-pages */
import type { VFC } from "react";
import type { TableOfContentsType } from "src/types/types";

type Props = {
  tableOfContents: TableOfContentsType;
};

export const TableOfContents: VFC<Props> = (props) => {
  return (
    <ul className="p-4 mx-auto w-1/2 rounded-md border border-blue-200">
      {props.tableOfContents.map((contents, index) => {
        return (
          <li className="py-1 ml-4 list-disc" key={index}>
            <a className="text-blue-500 underline" href={`#${contents.id}`}>
              {contents.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
