import Link from "next/link";

export const Archivecard = () => {
  return (
    <div>
      <h2 className="font-bold">アーカイブ</h2>
      <ul className="mt-2 rounded-md border-2 border-blue-200">
        <li className="p-3 hover:text-blue-300 border-b-2 border-blue-200 transition-colors duration-300">
          <Link href="/">
            <a>&gt; xxxx年xx月</a>
          </Link>
        </li>
        <li className="p-3 hover:text-blue-300 transition-colors duration-300">
          <Link href="/">
            <a>&gt; xxxx年xx月</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
