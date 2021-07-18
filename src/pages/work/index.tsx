import type {  NextPage } from "next";
import { Layout } from "src/components/layout/Layout";
// import { Card2 } from "src/components/shared/Card2";
// import { Pagination } from "src/components/shared/Pagination";
import { Title } from "src/components/layout/Title";


const Blog: NextPage = () => {
  return (
    <Layout>
      <Title bigTitle variant="box" className="text-3xl md:text-4xl">
        Work
      </Title>

      <p className="mt-6 font-bold text-center">プロダクトが出来上がり次第、こちらで紹介します。</p>

      {/* <ul className="flex flex-wrap gap-10 justify-center mt-10">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </ul>

      <div className="mt-16">
        <Pagination
          totalCount={10}
        />
      </div> */}


    </Layout>
  );
};

export default Blog;
