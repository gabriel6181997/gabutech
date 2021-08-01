import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Card } from "src/components/blogandwork/Card";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Blogs } from "src/types/types";

const ResultsPage: NextPage = () => {
  const router = useRouter();
  const searchKeyword = router.query.keyword;
  const [results, setResults] = useState<Blogs>();
  const [isLoading, setIsLoading] = useState(true);

  const getBlogInfo = useCallback(async () => {
    try {
      const data: Blogs = await client.get({
        endpoint: `blogs?q=${searchKeyword}`,
      });
      setResults(data);
    } catch (e) {
      throw new Error(`ブログの情報を取得できませんでした！`);
    }
    setIsLoading(false);
  }, [searchKeyword]);

  useEffect(() => {
    getBlogInfo();
  }, [getBlogInfo]);

  return (
    <Layout>
      <Title variant="box" className="text-3xl md:text-4xl" bigTitle>
        {searchKeyword}の検索結果
      </Title>
      <ul className="flex flex-wrap gap-10 justify-center mt-10">
        {isLoading ? (
          <ReactLoading type="spin" color="#BFDBFE" height={"10%"} width={"10%"} />
        ) : (results?.contents.length ?? 0) > 0 ? (
          results?.contents.map((result) => {
            return (
              <Card
                key={result.title}
                href={`/blog/${result.id}`}
                image={result.image.url}
                title={result.title}
                date={result.publishedAt}
              />
            );
          })
        ) : (
          <p className="font-bold">該当記事は見つかりませんでした！</p>
        )}
      </ul>
    </Layout>
  );
};

export default ResultsPage;
