import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { client } from "src/libs/client";
import type { BlogDateInfo } from "src/types/types";

export const Archivecard = () => {
  const [blogInfo, setBlogInfo] = useState<BlogDateInfo>();

  const getBlogInfo = useCallback(async () => {
    try {
      const data: BlogDateInfo = await client.get({
        endpoint: "blogs",
        queries: {
          limit: 1000,
          fields: "id,publishedAt",
        },
      });
      setBlogInfo(data);
    } catch (e) {
      throw new Error(`ブログの情報を取得できませんでした！`);
    }
  }, []);

  useEffect(() => {
    getBlogInfo();
  }, [getBlogInfo]);

  const blogDate = blogInfo?.contents?.map((blog) => {
    const date = new Date(blog.publishedAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const fixedMonth = `${year}年${month}月`;
    return fixedMonth;
  });

  const extractedBlogDate = blogDate?.filter((x, i, self) => {
    return self.indexOf(x) === i;
  });

  return (
    <div>
      <h2 className="font-bold">アーカイブ</h2>
      <ul className="mt-2 rounded-md border-2 border-blue-200">
        {extractedBlogDate?.map((date, index) => {
          return (
            <li key={index} className="p-3 hover:text-blue-300 transition-colors duration-300">
              <Link href="/">
                <a>&gt; {date}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
