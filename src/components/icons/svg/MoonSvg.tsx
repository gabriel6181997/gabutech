import type { VFC } from "react";
import { memo } from "react";

type Props = {
  className: string;
};

export const MoonSvg: VFC<Props> = memo((props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
});

MoonSvg.displayName = "MoonSvg";
