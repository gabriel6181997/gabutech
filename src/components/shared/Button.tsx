import Link from "next/link";

export const Button = () => {
  return (
    <button className="inline-block p-3 py-3 px-10 font-bold tracking-widest text-blue-300 hover:text-white bg-white hover:bg-blue-300 rounded-xl shadow-md transition-colors duration-300">
      <Link href="/">
        <a>MORE</a>
      </Link>
    </button>
  );
}
