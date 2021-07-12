import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <li className="max-w-[250px] bg-white rounded-[10px] shadow-md">
      <Link href="/">
        <a>
          <Image src="/img/blogcardtemporaryimage.png" alt="blog-card-img" width={250} height={250} />
          <div className="pb-2 pl-3">
            <h3 className="font-bold">タイトルタイトル</h3>
            <p className="text-sm">xxxx年xx月xx日</p>
          </div>
        </a>
      </Link>
    </li>
  );
}