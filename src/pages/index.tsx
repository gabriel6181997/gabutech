import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Card2 } from "src/components/blogandwork/Card2";
import { GitHubSvg } from "src/components/icons/svg/GitHubSvg";
import { TwitterSvg } from "src/components/icons/svg/TwitterSvg";
import { ButtonNavigation } from "src/components/layouts/ButtonNavigation";
import { Footer } from "src/components/layouts/Footer";
import { Header } from "src/components/layouts/Header";
import { Title } from "src/components/layouts/Title";
import { MoreButton } from "src/components/shared/MoreButton";
import { client } from "src/libs/client";
import type { Top } from "src/types/types";

export const getStaticProps: GetStaticProps = async () => {
  const data: Top = await client.get({ endpoint: "top" });

  return {
    props: {
      top: data,
    },
  };
};

const Home: NextPage<Top> = (props) => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-10 md:mt-20">
        <div className="container block md:flex md:flex-row-reverse md:justify-center lg:justify-around items-center mx-auto">
          <Image src={props.top.top.firstviewimage.url} alt="firstview" width={550} height={550} />
          <div className="mt-5 md:mt-0 md:mr-5 lg:mr-0">
            <p className="pb-2 text-3xl sm:text-4xl lg:text-5xl font-bold">ガブリエル</p>
            <p className="mb-6 md:mb-16 text-sm md:text-base">{props.top.top.title}</p>

            <article
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                __html: `${props.top.top.catchcopy}`,
              }}
            />
          </div>
        </div>

        <section className="container md:flex md:flex-row-reverse justify-center items-center my-16">
          <div className="p-6 md:p-12 md:ml-24 w-full md:max-w-[500px] bg-blue-200">
            <h2 className="mx-auto md:ml-0 max-w-[85px] md:max-w-[100px] text-3xl md:text-4xl font-bold border-b-4 border-blue-900">
              About
            </h2>
            <article
              className="py-6 text-sm md:text-base leading-normal"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line @typescript-eslint/naming-convention
                __html: `${props.top.top.aboutdescription}`,
              }}
            />
            <div className="flex gap-4">
              <Link href="https://github.com/gabriel6181997">
                <a>
                  <GitHubSvg className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current" />
                </a>
              </Link>
              <Link href="https://twitter.com/gabu_ITengineer">
                <a>
                  <TwitterSvg className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current" />
                </a>
              </Link>
            </div>

            <Link href="/about">
              <a className="flex justify-end items-center mt-4 font-bold text-blue-900 hover:text-white duration-300">
                <p>~ MORE</p>
                <span className="mb-1 ml-1 text-3xl">&#10230;</span>
              </a>
            </Link>
          </div>

          <div className="mt-8 md:mt-0 text-center md:text-left">
            <Image src={props.top.top.selfportrait.url} alt="self" width={200} height={300} />
          </div>
        </section>

        <section className="py-12 bg-blue-200">
          <div className="container">
            <Title variant="underlined" className="max-w-[80px] text-3xl md:text-4xl text-center">
              Blog
            </Title>
            <ul className="flex flex-col md:flex-row gap-6 md:justify-center pt-8">
              <Card2 />
              <Card2 />
              <Card2 />
            </ul>

            <div className="pt-8 text-center">
              <MoreButton href="/blog" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <Title variant="underlined" className="max-w-[90px] text-3xl md:text-4xl text-center">
              Work
            </Title>

            <ul className="flex flex-col md:flex-row gap-6 md:justify-center pt-8">
              <Card2 />
              <Card2 />
              <Card2 />
            </ul>
            <div className="pt-8 text-center">
              <MoreButton href="/work" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <div className="block md:hidden">
        <ButtonNavigation />
      </div>
    </>
  );
};

export default Home;
