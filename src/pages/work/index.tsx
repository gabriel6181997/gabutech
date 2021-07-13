import type {  NextPage } from "next";
import { Layout } from "src/components/separate/Layout";
import { Card } from "src/components/shared/Card";
import { Pagination } from "src/components/shared/Pagination";
import { Title } from "src/components/shared/Title";


const Blog: NextPage = () => {
  return (
    <Layout>
      <Title bigTitle variant="box" className="text-4xl">
        Work
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
