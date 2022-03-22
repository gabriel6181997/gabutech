import cheerio from "cheerio";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { BiTime } from "react-icons/bi";
import { MdOutlineAutorenew } from "react-icons/md";
import { TableOfContents } from "src/components/blogandwork/TableOfContents";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { Tag } from "src/components/shared/Tag";
import { addClassNames } from "src/libs/addClassNames";
import { client } from "src/libs/client";
import { fixDateFormat } from "src/libs/fixDateFormat";
import type { Blog, Blogs, TableOfContentsType } from "src/types/types";

type Props = {
  blog: Blog;
  tableOfContents: TableOfContentsType;
  parsedHtml: HTMLElement;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Blogs = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => {
    return `/blog/${content.id}`;
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const blog: Blog = await client.get({ endpoint: "blogs", contentId: id });
  const blogDetail = blog.content;

  const $ = cheerio.load(blogDetail);
  const headings = $("h2").toArray();

  const tableOfContents = headings.map((data: any) => {
    return {
      text: data.children[0].data ? data.children[0].data : "",
      id: data.attribs.id ? data.attribs.id : "",
      level: data.name ? data.name : "",
    };
  });

  const classNamesAddedHtml = addClassNames($);

  return {
    props: {
      blog: blog,
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
          {props.blog.title}
        </Title>
        <div className="text-center">
          <Image src={props.blog.image.url} alt="blog-picture" width={350} height={350} />
        </div>
        <ul className="flex flex-wrap gap-3 mt-6">
          {props.blog.tags?.map((tag, index) => {
            return (
              <li key={index}>
                <Tag tagName={tag.tagName} />
              </li>
            );
          })}
        </ul>
        <div className="flex items-center mt-3">
          <div className="flex items-center">
            <BiTime className="pr-1 text-gray-600" size="20px" />
            <p className="font-bold">{fixDateFormat(props.blog.publishedAt)}</p>
          </div>
          <div className="flex items-center ml-3">
            <MdOutlineAutorenew className="pr-1 text-gray-600" size="20px" />
            <p className="font-bold">{fixDateFormat(props.blog.revisedAt)}</p>
          </div>
        </div>
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
