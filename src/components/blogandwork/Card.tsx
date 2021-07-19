import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import { fixDateFormat } from "src/libs/fixDateFormat";

type Props = {
  href: string;
  image: string;
  title: string;
  date: string;
}

export const Card:VFC<Props> = (props) => {
  return (
    <li className="mx-auto md:mx-0 max-w-[250px] bg-white rounded-[10px] shadow-md">
      <Link href={props.href}>
        <a>
          <Image src={props.image}
            alt={props.title} width={250} height={250} />
          <div className="pb-2 pl-3">
            <h3 className="font-bold">{props.title}</h3>
            <p className="text-sm">
              {fixDateFormat(props.date)}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
}