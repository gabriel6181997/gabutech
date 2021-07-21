import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { TagButton } from "src/components/shared/TagButton";
import { client } from "src/libs/client";
import type { Tags } from "src/types/types";

type Props = {
  tags: Tags;
};

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "tags" });

  return {
    props: {
      tags: data,
    },
  };
};

const TagPage: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Title variant="box" className="text-3xl md:text-4xl" bigTitle>
        タグ一覧
      </Title>
      <ul className="flex flex-wrap gap-6 justify-center mt-10">
        {props.tags.contents.map((tag) => {
          return <TagButton href={`/tag/${tag.tagName}`} title={tag.tagName} key={tag.tagName} />;
        })}
      </ul>
    </Layout>
  );
};

export default TagPage;
