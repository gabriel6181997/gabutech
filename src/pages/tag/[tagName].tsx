import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Card } from "src/components/blogandwork/Card";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Blog, Blogs, Tags, Work, Works } from "src/types/types";

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: Tags = await client.get({ endpoint: "tags" });

  const paths = tags.contents.map((tag) => {
    return `/tag/${tag.tagName}`;
  });

  return { paths: paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const tags: Tags = await client.get({ endpoint: "tags" });

  const tag = tags.contents.find((tag) => {
    return context.params?.tagName === tag.tagName;
  });

  const blogData: Blogs = await client.get({
    endpoint: `blogs?filters=tags[contains]${tag?.id}`,
  });

  const workData: Works = await client.get({
    endpoint: `works?filters=tags[contains]${tag?.id}`,
  });

  const data = [...blogData.contents, ...workData.contents];

  return {
    props: { data: data, tag: context.params?.tagName },
  };
};

type Props = {
  data: Blog[] | Work[];
  tag: string;
};

export const tagName: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Title variant="box" className="text-3xl md:text-4xl" bigTitle>
        {props.tag}のタグ一覧
      </Title>
      <ul className="flex flex-wrap gap-10 justify-center mt-10">
        {props.data.length > 0 ? (
          props.data.map((datum, index) => {
            return datum.isWork ? (
              <Card
                key={index}
                title={datum.title}
                date={datum.publishedAt}
                href={`/work/${datum.id}`}
                image={datum.image.url}
              />
            ) : (
              <Card
                key={index}
                title={datum.title}
                date={datum.publishedAt}
                href={`/blog/${datum.id}`}
                image={datum.image.url}
              />
            );
          })
        ) : (
          <p>該当記事は見つかりませんでした！</p>
        )}
      </ul>
    </Layout>
  );
};

export default tagName;
