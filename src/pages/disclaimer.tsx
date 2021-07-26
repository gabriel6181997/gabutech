import cheerio from "cheerio";
import type { GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";
import { addClassNames } from "src/libs/addClassNames";
import { client } from "src/libs/client";
import type { DisclaimerType } from "src/types/types";

type Props = {
  parsedHtml: HTMLElement;
};

export const getStaticProps: GetStaticProps = async () => {
  const data: DisclaimerType = await client.get({ endpoint: "disclaimer" });

  const disclaimerContent = data.content;
  const $ = cheerio.load(disclaimerContent);
  const classNamesAddedHtml = addClassNames($);

  return {
    props: {
      parsedHtml: classNamesAddedHtml.html(),
    },
  };
};

const Disclaimer: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Title bigTitle variant="box" className="text-3xl md:text-4xl">
        免責事項
      </Title>
      <article
        className="mt-8"
        dangerouslySetInnerHTML={{
          // eslint-disable-next-line @typescript-eslint/naming-convention
          __html: `${props.parsedHtml}`,
        }}
      />
    </Layout>
  );
};

export default Disclaimer;
