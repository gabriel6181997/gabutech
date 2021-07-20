import type { NextPage } from "next";
import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";

const SearchIndexPage: NextPage = () => {
  return (
    <Layout>
      <Title className="text-3xl md:text-4xl" variant="box" bigTitle>
        検索
      </Title>
    </Layout>
  );
};

export default SearchIndexPage;
