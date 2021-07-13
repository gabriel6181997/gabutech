import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { Layout } from "src/components/separate/Layout";
import { Title } from "src/components/shared/Title";
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

//blog id: g889l0ol1
// <main>
//   <h1>{props.blogDetail.title}</h1>
//   <p>{props.blogDetail.publishedAt}</p>
//   <p>{props.blogDetail.category && `${props.blogDetail.category.name}`}</p>
//   <article
//     dangerouslySetInnerHTML={{
//       // eslint-disable-next-line @typescript-eslint/naming-convention
//       __html: `${props.blogDetail.content}`,
//     }}
//   />
// </main>

const BlogId: NextPage<Props> = () => {

  return (
    <>
      <Layout>
        <Title bigTitle variant="box" className="mb-6 text-4xl">
          タイトルタイトル
        </Title>
        <Image src="/img/blogillustration.png" alt="blog-picture" width={900} height={450} />
        <ul className="flex flex-wrap gap-3 mt-8">
          <li className="p-3 font-bold text-blue-900 rounded-xl border-2 border-blue-900">JavaScript</li>
          <li className="p-3 font-bold text-blue-900 rounded-xl border-2 border-blue-900">Next.js</li>
        </ul>
        <p className="mt-3 font-bold">xxxx年xx月xx日</p>
        <article className="mt-4">
          <Title variant="box" className="text-2xl">
            h2タイトル
          </Title>
          <p className="my-4">
            dkfgshsdkf hdgkfln hdilsfn kldf hjksf bkjdsf bksd bkfdb k bjkfdb kj bksdf bjkdf bjksfdg bskdfb kfb ksdfbj
            kjfb kjsdfb kjdfb kjdfb kdfbk dfbk jdfhlj niosdfjn iogmjldfij dfmj fdmj ldfmj lifd fd fmj lsmj lisfdj fgmj
            lsf ijglfd mjidflsg{" "}
          </p>
          <Title variant="box" className="text-2xl">
            h2タイトル
          </Title>
            <h3 className="my-2 underline">h3タイトル</h3>
          <p className="mt-2">
            dkfgshsdkf hdgkfln hdilsfn kldf hjksf bkjdsf bksd bkfdb k bjkfdb kj bksdf bjkdf bjksfdg bskdfb kfb ksdfbj
            kjfb kjsdfb kjdfb kjdfb kdfbk dfbk jdfhlj niosdfjn iogmjldfij dfmj fdmj ldfmj lifd fd fmj lsmj lisfdj fgmj
            lsf ijglfd mjidflsg{" "}
          </p>
        </article>
      </Layout>
    </>
  );
};

export default BlogId;
