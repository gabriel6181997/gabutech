import type { VFC } from "react";

type Props = {
  tagName: string;
};

export const Tag: VFC<Props> = (props) => {
  return (
    <div className="p-2 text-sm md:text-base font-bold text-blue-900 rounded-xl border-2 border-blue-900">
      {props.tagName}
    </div>
  );
};
