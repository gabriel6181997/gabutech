import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Card } from "src/components/blogandwork/Card";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Blogs, Tags } from "src/types/types";

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

  const blogs: Blogs = await client.get({
    endpoint: `blogs?filters=tags[contains]${tag?.id}`,
  });

  return {
    props: { blogs: blogs, tag: context.params?.tagName },
  };
};

type Props = {
  blogs: Blogs;
  tag: string;
};

export const tagName: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Title variant="box" className="text-3xl md:text-4xl" bigTitle>
        {props.tag}のタグ一覧
      </Title>
      <ul className="mt-10">
        {props.blogs.contents.length > 0 ? (
          props.blogs.contents.map((blog) => {
            return (
              <Card
                key={blog.id}
                title={blog.title}
                date={blog.createdAt}
                href={`/blog/${blog.id}`}
                image={blog.image.url}
              />
            );
          })
        ) : (
          <p>該当記事はありません！</p>
        )}
      </ul>
    </Layout>
  );
};

export default tagName;
