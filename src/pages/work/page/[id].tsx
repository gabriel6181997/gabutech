import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Card } from "src/components/blogandwork/Card";
import { Pagination } from "src/components/blogandwork/Pagination";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Works } from "src/types/types";

const PER_PAGE = 9;

type Props = {
  works: Works;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Works = await client.get({ endpoint: "works" });

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(data.totalCount / PER_PAGE)).map((repo) => {
    return `/work/page/${repo}`;
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const numberId = Number(id);

  const data: Works = await client.get({ endpoint: `works?offset=${(numberId - 1) * 9}&limit=9` });

  return {
    props: {
      works: data,
    },
  };
};

const WorkPageId: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Title bigTitle variant="box" className="text-3xl md:text-4xl">
        Work
      </Title>
      <ul className="flex flex-wrap gap-10 justify-center mt-10">
        {props.works.contents.map((work) => {
          return (
            <Card
              key={work.title}
              href={`/work/${work.id}`}
              image={work.image.url}
              title={work.title}
              date={work.publishedAt}
            />
          );
        })}
      </ul>

      <div className="mt-16">
        <Pagination totalCount={props.works.totalCount} />
      </div>
    </Layout>
  );
};

export default WorkPageId;
