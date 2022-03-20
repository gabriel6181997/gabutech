import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import { BiTime } from "react-icons/bi";
import { MdOutlineAutorenew } from "react-icons/md";
import { fixDateFormat } from "src/libs/fixDateFormat";

type Props = {
  href: string;
  image: string;
  title: string;
  publishedAt: string;
  revisedAt: string;
};

export const Card: VFC<Props> = (props) => {
  return (
    <li className="mx-auto md:mx-0 max-w-[250px] bg-white rounded-[10px] shadow-md">
      <Link href={props.href}>
        <a>
          <Image src={props.image} alt={props.title} width={250} height={250} className="rounded-t-[10px]" />
          <div className="pb-2 pl-3">
            <h3 className="font-bold">{props.title}</h3>
            <div className="flex items-center pt-1">
              <BiTime className="pr-1 text-gray-600" />
              <p className="text-sm">{fixDateFormat(props.publishedAt)}</p>
            </div>
            <div className="flex items-center pt-1">
              <MdOutlineAutorenew className="pr-1 text-gray-600" />
              <p className="text-sm">{fixDateFormat(props.revisedAt)}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};
