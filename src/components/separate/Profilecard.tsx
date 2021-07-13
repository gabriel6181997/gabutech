import Image from "next/image";
import Link from "next/link";
import { MoreButton } from "src/components/shared/MoreButton";
import { ICONS } from "src/utils/iconutil";

export const Profilecard = () => {
  return (
    <div>
      <h2 className="font-bold">プロフィール</h2>
      <div className="p-5 mt-2 text-center rounded-md border-2 border-blue-200">
        <Image className="rounded-full" src="/img/selflogo.png" alt="profile" width={150} height={150} />
        <p className="mt-3 font-bold">ガブリエル</p>
        <p className="mt-1 text-sm">越境駆け出しエンジニア</p>
        <hr className="mx-auto mt-5 w-24 h-1 border-0 border-t-[2px] border-blue-200" />

        <div className="flex gap-4 justify-center mt-5">
          {ICONS.map((icon) => {
            return (
              <Link key={icon.link} href={icon.link}>
                <a>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              </Link>
            );
          })}
        </div>

        <div className="mt-4">
          <MoreButton href="/about" />
        </div>
      </div>
    </div>
  );
}
