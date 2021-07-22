import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Card } from "src/components/blogandwork/Card";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Blogs } from "src/types/types";

const ResultsPage: NextPage = () => {
  const router = useRouter();
  const searchKeyword = router.query.keyword;
  const [results, setResults] = useState<Blogs>();
  useEffect(() => {
    async () => {
      try {
        const data: Blogs = await client.get({ endpoint: `blogs?q=${searchKeyword}` });
        setResults(data);
      } catch {
        throw new Error(`ブログのデータを取得できませんでした！`);
      }
    };
  }, [searchKeyword]);

  return (
    <Layout>
      <Title variant="box" className="text-3xl md:text-4xl" bigTitle>
        {searchKeyword}の検索結果
      </Title>
      <ul>
        {results?.contents.map((result) => {
          return (
            <Card
              key={result.title}
              href={`/blog/${result.id}`}
              image={result.image.url}
              title={result.title}
              date={result.createdAt}
            />
          );
        })}
      </ul>
    </Layout>
  );
};

export default ResultsPage;
