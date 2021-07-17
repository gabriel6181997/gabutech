import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/separate/Layout";
import { Card } from "src/components/shared/Card";
import { Pagination } from "src/components/shared/Pagination";
import { Title } from "src/components/shared/Title";
import type { Blogs } from "src/types/types";

const PER_PAGE = 9;

type Props = {
  blogs: Blogs;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.API_KEY as string },
  };

  const res = await fetch("https://gabutech.microcms.io/api/v1/blog", key);

  const repos: Blogs = await res.json();

  const range = (start: number, end: number) => {
    return [...Array(end - start + 1)].map((_, i) => {
      return start + i;
    });
  };

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => {
    return `/blog/page/${repo}`;
  });

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const numberId = Number(id);

  const key = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: { "X-API-KEY": process.env.API_KEY as string },
  };

  const data: Blogs = await fetch(`https://gabutech.microcms.io/api/v1/blog?offset=${(numberId -1)*9}&limit=9`, key)
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

const BlogPageId: NextPage<Props> = (props) => {
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

export default BlogPageId;
