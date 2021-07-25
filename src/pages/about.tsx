import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { client } from "src/libs/client";
import type { AboutType } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const data: AboutType = await client.get({ endpoint: "about" });

  return {
    props: {
      about: data,
    },
  };
};

type Props = {
  about: AboutType,
}

const About: NextPage<Props> = (props) => {

  return (
    <>
      <Layout>
        <Title bigTitle variant="box" className="mb-6 text-3xl md:text-4xl">
          About
        </Title>

        <Image src="/img/blogillustration.png" alt="blog-picture" width={900} height={450} />

        <article
          className="my-6"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.about.shortdescription}`,
          }}
        />

        <Title variant="box" className="text-2xl">
          経歴
        </Title>

        <ul className="my-7 space-y-6">
          {props.about.history.map((history) => {
            return (
              <li className="flex items-center" key={history.title}>
                <p className="box-border block p-2 mr-4 md:mr-8 text-sm font-bold text-center bg-blue-200 rounded-xl">
                  {history.year}
                  {history.year === "現在" ? null : "."}
                  {history.month}
                </p>
                <div className="p-2 bg-blue-200 rounded-[10px]">
                  <p className="font-bold">{history.title}</p>
                  <p className="mt-2 text-sm">{history.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <Title variant="box" className="text-2xl">
          スキル
        </Title>
        <article
          className="my-7"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.about.skill}`,
          }}
        />

        <Title variant="box" className="text-2xl">
          最後に
        </Title>

        <article
          className="mt-7"
          dangerouslySetInnerHTML={{
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${props.about.conclusion}`,
          }}
        />
      </Layout>
    </>
  );
};

export default About;
