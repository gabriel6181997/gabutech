import Image from "next/image";
import Link from "next/link";
import { Button } from "src/components/shared/Button";
import { ICONS } from "src/utils/iconutil";

export const Sidebar = () => {
  return (
    <aside className="block px-9 w-1/3">
      <input
        className="block py-3 px-2 mx-auto w-full rounded-md border-2 border-blue-200"
        type="text"
        placeholder="xxを検索"
      />

      <div className="mt-10">
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
            <Button />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold">カテゴリー</h2>
        <div className="flex flex-wrap gap-4 p-5 mt-2 rounded-md border-2 border-blue-200">
          <Link href="/">
            <a className="py-1 px-3 font-bold text-blue-300 hover:text-white hover:bg-blue-300 rounded-2xl shadow-md transition-colors duration-300">
              React
            </a>
          </Link>

          <Link href="/">
            <a className="py-1 px-3 font-bold text-blue-300 hover:text-white hover:bg-blue-300 rounded-2xl shadow-md transition-colors duration-300">
              Next.js
            </a>
          </Link>

          <Link href="/">
            <a className="py-1 px-3 font-bold text-blue-300 hover:text-white hover:bg-blue-300 rounded-2xl shadow-md transition-colors duration-300">
              TypeScript
            </a>
          </Link>

          <Link href="/">
            <a className="py-1 px-3 font-bold text-blue-300 hover:text-white hover:bg-blue-300 rounded-2xl shadow-md transition-colors duration-300">
              TypeScript
            </a>
          </Link>

          <Link href="/">
            <a className="py-1 px-3 font-bold text-blue-300 hover:text-white hover:bg-blue-300 rounded-2xl shadow-md transition-colors duration-300">
              TypeScript
            </a>
          </Link>

          <Link href="/">
            <a className="py-1 px-3 font-bold text-blue-300 hover:text-white hover:bg-blue-300 rounded-2xl shadow-md transition-colors duration-300">
              TypeScript
            </a>
          </Link>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-bold">アーカイブ</h2>
        <ul className="mt-2 rounded-md border-2 border-blue-200">
          <li className="p-3 border-b-2 border-blue-200">
            <Link href="/">
              <a>&gt; xxxx年xx月</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/">
              <a>&gt; xxxx年xx月</a>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
