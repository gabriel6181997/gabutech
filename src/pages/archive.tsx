import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Card } from "src/components/blogandwork/Card";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Blogs } from "src/types/types";

const Archive = () => {
  const [blogInfo, setBlogInfo] = useState<Blogs>();
  const router = useRouter();
  const publishedDate = router.query.publishedAt;
  const [isLoading, setIsLoading] = useState(true);

  const getBlogInfo = useCallback(async () => {
    try {
      const data: Blogs = await client.get({
        endpoint: "blogs",
        queries: { limit: 1000, filters: `publishedAt[contains]${publishedDate}` },
      });
      setBlogInfo(data);
    } catch (e) {
      throw new Error(`ブログの情報を取得できませんでした！`);
    }
    setIsLoading(false);
  }, [publishedDate]);

  useEffect(() => {
    getBlogInfo();
  }, [getBlogInfo]);

  return (
    <Layout>
      <Title bigTitle variant="box" className="mb-6 text-3xl md:text-4xl">
        {publishedDate}
      </Title>
      <ul className="flex flex-wrap gap-10 justify-center mt-10">
        {isLoading ? (
          <ReactLoading type="spin" color="#BFDBFE" height={"10%"} width={"10%"} />
        ) : (
          blogInfo?.contents.map((blog, index) => {
            return (
              <Card
                key={index}
                href={`/blog/${blog.id}`}
                image={blog.image.url}
                title={blog.title}
                date={blog.publishedAt}
              />
            );
          })
        )}
      </ul>
    </Layout>
  );
};

export default Archive;
