import type { GetStaticProps, NextPage } from "next";
import { Card } from "src/components/blogandwork/Card";
import { Pagination } from "src/components/blogandwork/Pagination";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Works } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const data: Works = await client.get({ endpoint: `works?offset=0&limit=9` });

  return {
    props: {
      works: data,
    },
  };
};

type Props = {
  works: Works;
};

const Work: NextPage<Props> = (props) => {
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

      {props.works.totalCount > 9 ? (
        <div className="mt-16">
          <Pagination totalCount={props.works.totalCount} />
        </div>
      ) : null}
    </Layout>
  );
};

export default Work;
