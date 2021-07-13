import cc from "classcat";
import type { ReactNode, VFC } from "react";

type Props = {
  bigTitle?: boolean;
  className?: string;
  children: ReactNode;
  variant: "underlined" | "box";
};

export const Title: VFC<Props> = (props) => {
  const className = cc([
    props.className,
    "font-bold",
    {
      "p-3 bg-blue-200 border-l-4 border-blue-900": props.variant === "box",
      "mx-auto border-b-4 border-blue-900":
        props.variant === "underlined",
    },
  ]);

  return (
    <>{props.bigTitle ? <h1 className={className}>{props.children}</h1> : <h2 className={className}>{props.children}</h2>}</>
  );
};
