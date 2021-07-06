import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/libs/client";
import type { Blog, Blogs } from "src/types/types";

type Props = {
  blogDetail: Blog;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Blogs = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => {
    return `/blog/${content.id}`;
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({ endpoint: "blog" });
  const blogDetail = blogs.contents.filter((blog) => {
    return blog.id === context.params?.id;
  });

  return {
    props: { blogDetail: blogDetail[0] },
  };
};

const BlogId: NextPage<Props> = (props) => {

  return (
    <main>
      <h1>{props.blogDetail.title}</h1>
      <p>{props.blogDetail.publishedAt}</p>
      <p>{props.blogDetail.category && `${props.blogDetail.category.name}`}</p>
      <article
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          __html: `${props.blogDetail.content}`,
        }}
      />
    </main>
  );
};

export default BlogId;
