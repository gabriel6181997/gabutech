import Link from "next/link";

export const Pagination = () => {
  return (
    <ul className="flex gap-3 justify-center mt-16 text-center">
      <li className="block w-10 h-10 leading-10 text-center text-blue-300 hover:text-white hover:bg-blue-200 border-2 border-blue-200 transition-colors duration-300">
        <Link href="/">
          <a>1</a>
        </Link>
      </li>
      <li className="block w-10 h-10 leading-10 text-center text-blue-300 hover:text-white hover:bg-blue-200 border-2 border-blue-200 transition-colors duration-300">
        <Link href="/">
          <a>2</a>
        </Link>
      </li>
      <li className="block w-10 h-10 leading-10 text-center text-blue-300 hover:text-white hover:bg-blue-200 border-2 border-blue-200 transition-colors duration-300">
        <Link href="/">
          <a>3</a>
        </Link>
      </li>
      <li className="block w-10 h-10 leading-10 text-center text-blue-300 hover:text-white hover:bg-blue-200 border-2 border-blue-200 transition-colors duration-300">
        <Link href="/">
          <a>4</a>
        </Link>
      </li>
      <li className="block w-10 h-10 leading-10 text-center text-blue-300 hover:text-white hover:bg-blue-200 border-2 border-blue-200 transition-colors duration-300">
        <Link href="/">
          <a>5</a>
        </Link>
      </li>
    </ul>
  );
}
