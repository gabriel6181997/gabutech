import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { memo } from "react";

export const Breadcrumb = memo(() => {
  const router = useRouter();
  const currentPagePath = router.asPath;

  console.log(currentPagePath)

  return (
    <div className="container my-3">
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="hover:text-blue-300 hover:underline transition-all duration-300">Home</a>
          </Link>
        </li>
        <li className="ml-2">{">"}</li>
        <li className="ml-2">About</li>
      </ul>
    </div>
  );
});

Breadcrumb.displayName = "Breadcrumb";

