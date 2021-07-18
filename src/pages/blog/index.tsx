import type { GetStaticProps, NextPage } from "next";
import { Card } from "src/components/blogandwork/Card";
import { Pagination } from "src/components/blogandwork/Pagination";
import { Layout } from "src/components/layout/Layout";
import { Title } from "src/components/layout/Title";
import type { Blogs } from "src/types/types";

type Props = {
  blogs: Blogs;
};

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.API_KEY as string },
  };

  const data: Blogs = await fetch("https://gabutech.microcms.io/api/v1/blog?offset=0&limit=9", key)
    .then((res) => {
      return res.json();
    })
    .catch(() => {
      return null;
    });

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
              date={blog.createdAt}
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
