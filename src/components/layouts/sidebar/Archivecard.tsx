import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { client } from "src/libs/client";
import type { DateInfo, DateInfoContent } from "src/types/types";

export const Archivecard = () => {
  const [postInfo, setPostInfo] = useState<DateInfoContent[]>([]);

  const getPostInfo = useCallback(async () => {
    try {
      const blogDateInfo: DateInfo = await client.get({
        endpoint: "blogs",
        queries: {
          limit: 1000,
          fields: "id,publishedAt",
        },
      });

      const workDateInfo: DateInfo = await client.get({
        endpoint: "works",
        queries: {
          limit: 1000,
          fields: "id,publishedAt",
        },
      });

      const data = [...blogDateInfo.contents, ...workDateInfo.contents];

      setPostInfo(data);
    } catch (e) {
      throw new Error(`記事の情報を取得できませんでした！`);
    }
  }, []);

  useEffect(() => {
    getPostInfo();
  }, [getPostInfo]);

  const postDate = postInfo.map((post) => {
    const date = new Date(post.publishedAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    const fixedMonth = `${year}-${month}`;
    return fixedMonth;
  });

  const extractedPostDate = postDate?.filter((x, i, self) => {
    return self.indexOf(x) === i;
  });

  return (
    <div>
      <h2 className="font-bold">アーカイブ</h2>
      <ul className="mt-2 rounded-md border-2 border-blue-200">
        {extractedPostDate?.map((date, index) => {
          return (
            <li key={index} className="p-3 hover:text-blue-300 border-b-2 last:border-b-0 border-blue-200 transition-colors duration-300">
              <Link href={{ pathname: "/archive", query: { publishedAt: date } }}>
                <a>&gt; {date}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
