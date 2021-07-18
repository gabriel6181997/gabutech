import cheerio from "cheerio";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { TableOfContents } from "src/components/blogandwork/TableOfContents";
import { Layout } from "src/components/layout/Layout";
import { Title } from "src/components/layout/Title";
import { addClassNames } from "src/libs/addClassNames";
import { client } from "src/libs/client";
import { fixDateFormat } from "src/libs/fixDateFormat";
import type { Blog, Blogs, TableOfContentsType } from "src/types/types";

type Props = {
  blogDetail: Blog;
  tableOfContents: TableOfContentsType;
  parsedHtml: HTMLElement;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Blogs = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => {
    return `/blog/${content.id}`;
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const blogs: Blogs = await client.get({ endpoint: "blog" });
  const blogDetail = blogs.contents.filter((blog) => {
    return blog.id === context.params?.id;
  });

  const $ = cheerio.load(blogDetail[0].content);
  const headings = $("h2").toArray();

  const tableOfContents = headings.map((data: any) => {
    return {
      text: data.children[0].data,
      id: data.attribs.id,
      level: data.name,
    };
  });

  const classNamesAddedHtml = addClassNames($);

  return {
    props: {
      blogDetail: blogDetail[0],
      tableOfContents: tableOfContents,
      parsedHtml: classNamesAddedHtml.html(),
    },
  };
};

const BlogId: NextPage<Props> = (props) => {
  return (
    <>
      <Layout>
        <Title bigTitle variant="box" className="mb-6 text-3xl md:text-4xl">
          {props.blogDetail.title}
        </Title>
        <Image src={props.blogDetail.image.url} alt="blog-picture" width={900} height={450} />
        <ul className="flex flex-wrap gap-3 mt-6">
          <li className="p-3 text-sm md:text-base font-bold text-blue-900 rounded-xl border-2 border-blue-900">
            JavaScript
          </li>
          <li className="p-3 text-sm md:text-base font-bold text-blue-900 rounded-xl border-2 border-blue-900">
            Next.js
          </li>
        </ul>
        <p className="mt-3 font-bold">{fixDateFormat(props.blogDetail.createdAt)}</p>
        {props.tableOfContents.length > 0 ? (
          <div className="my-4">
            <h3 className="pb-2 font-bold text-center">目次</h3>
            <TableOfContents tableOfContents={props.tableOfContents} />
          </div>
        ) : null}
        <article
          className="mt-4"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.parsedHtml}`,
          }}
        />
      </Layout>
    </>
  );
};

export default BlogId;
