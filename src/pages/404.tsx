import { Layout } from "src/components/layouts/Layout";
import { Title } from "src/components/layouts/Title";

const Custom404 = () => {
  return (
    <Layout>
      <Title bigTitle variant="box" className="mb-6 text-3xl md:text-4xl">
        404 - Page Not Found
      </Title>
      <p className="font-bold">お探しのページは見つかりませんでした。</p>
    </Layout>
  );
};

export default Custom404;
