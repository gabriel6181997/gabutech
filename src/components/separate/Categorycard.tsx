import Link from "next/link";

export const Categorycard = () => {
  return (
    <div>
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
  );
}
