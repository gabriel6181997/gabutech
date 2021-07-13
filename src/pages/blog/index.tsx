import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/separate/Layout";
import { Card } from "src/components/shared/Card";
import { Pagination } from "src/components/shared/Pagination";
import { Title } from "src/components/shared/Title";
import { client } from "src/libs/client";
import type { Blogs } from "src/types/types";

type Props = {
  blogs: Blogs;
};

export const getStaticProps: GetStaticProps = async () => {
  const data: Blogs = await client.get({ endpoint: "blog" });

  return {
    props: {
      blogs: data,
    },
  };
};

{
  /* <ul>
  {props.blogs.contents.map((blog) => {
    return (
      <li key={blog.id}>
        <Link href={`/blog/${blog.id}`}>
          <a>{blog.title}</a>
        </Link>
      </li>
    );
  })}
</ul> */
}

const Blog: NextPage<Props> = () => {
  return (
    <Layout>
      <Title bigTitle variant="box" className="text-4xl">
        Blog
      </Title>
      <ul className="flex flex-wrap gap-10 justify-center mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>

      <div className="mt-16">
        <Pagination />
      </div>


    </Layout>
  );
};

export default Blog;
