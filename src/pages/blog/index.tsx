import type { GetStaticProps, NextPage } from "next";
import { Card } from "src/components/blogandwork/Card";
import { Pagination } from "src/components/blogandwork/Pagination";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { Blogs } from "src/types/types";

type Props = {
  blogs: Blogs;
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Blogs = await client.get({ endpoint: `blogs?offset=0&limit=9` })

  return {
    props: {
      blogs: data,
    },
  };
};

const Blog: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Title bigTitle variant="box" className="text-3xl md:text-4xl">
        Blog
      </Title>
      <ul className="flex flex-wrap gap-10 justify-center mt-10">
        {props.blogs.contents.map((blog) => {
          return (
            <Card
              key={blog.title}
              href={`/blog/${blog.id}`}
              image={blog.image.url}
              title={blog.title}
              date={blog.publishedAt}
            />
          );
        })}
      </ul>

      <div className="mt-16">
        <Pagination totalCount={props.blogs.totalCount} />
      </div>
    </Layout>
  );
};

export default Blog;
