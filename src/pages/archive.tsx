import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Card } from "src/components/blogandwork/Card";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Blog, Blogs, Work, Works } from "src/types/types";

const Archive = () => {
  const [postInfo, setPostInfo] = useState<Blog[] | Work[]>([]);
  const router = useRouter();
  const publishedDate = router.query.publishedAt;
  const [isLoading, setIsLoading] = useState(true);

  const getPostInfo = useCallback(async () => {
    try {
      const blogData: Blogs = await client.get({
        endpoint: "blogs",
        queries: { limit: 1000, filters: `publishedAt[contains]${publishedDate}` },
      });

      const workData: Works = await client.get({
        endpoint: "works",
        queries: { limit: 1000, filters: `publishedAt[contains]${publishedDate}` },
      });

      const data = [...blogData.contents, ...workData.contents];
      setPostInfo(data);
    } catch (e) {
      throw new Error(`記事の情報を取得できませんでした！`);
    }
    setIsLoading(false);
  }, [publishedDate]);

  useEffect(() => {
    getPostInfo();
  }, [getPostInfo]);

  return (
    <Layout>
      <Title bigTitle variant="box" className="mb-6 text-3xl md:text-4xl">
        {publishedDate}
      </Title>
      <ul className="flex flex-wrap gap-10 justify-center mt-10">
        {isLoading ? (
          <ReactLoading type="spin" color="#BFDBFE" height={"10%"} width={"10%"} />
        ) : (
          postInfo.map((post, index) => {
            return post.isWork ? (
              <Card
                key={index}
                href={`/work/${post.id}`}
                image={post.image.url}
                title={post.title}
                publishedAt={post.publishedAt}
                revisedAt={post.revisedAt}
              />
            ) : (
              <Card
                key={index}
                href={`/blog/${post.id}`}
                image={post.image.url}
                title={post.title}
                publishedAt={post.publishedAt}
                revisedAt={post.revisedAt}
              />
            );
          })
        )}
      </ul>
    </Layout>
  );
};

export default Archive;
