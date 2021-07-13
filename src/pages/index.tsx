import Image from "next/image";
import Link from "next/link";
import { Footer } from "src/components/separate/Footer";
import { Header } from "src/components/separate/Header";
import { Card } from "src/components/shared/Card";
import { MoreButton } from "src/components/shared/MoreButton";
import { Title } from "src/components/shared/Title";
import { ICONS } from "src/utils/iconutil";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-10 md:mt-20">
        <div className="container block md:flex md:flex-row-reverse md:justify-center lg:justify-around items-center mx-auto">
          <Image src="/img/fistviewtemporarylogo.png" alt="firstview" width={550} height={550} />
          <div className="mt-5 md:mt-0 md:mr-5 lg:mr-0">
            <p className="pb-2 text-3xl sm:text-4xl lg:text-5xl font-bold">ガブリエル</p>
            <p className="mb-6 md:mb-16 text-sm md:text-base">越境駆け出しエンジニア</p>
            <p>
              国境を超えて〜 <br />
              Webエンジニア就職で日本へ
            </p>
          </div>
        </div>

        <section className="container md:flex md:flex-row-reverse justify-center items-center my-16">
          <div className="p-6 md:p-12 md:ml-24 w-full md:max-w-[500px] bg-blue-200">
            <h2
              className="mx-auto md:ml-0 max-w-[85px] md:max-w-[100px] text-3xl md:text-4xl font-bold border-b-4 border-blue-900"
            >
              About
            </h2>

            <p className="py-6 text-sm md:text-base leading-normal">
              越境駆け出しエンジニアのガブリエルです。
              <br />
              YouTubeがきっかけでプログラミングに出会い、そこからプログラミングに夢中。
              <br />
              日本でWebエンジニアとして就職できるように、現在Web系のプログラミングを学習しており、得意分野はTypeScriptやNext.jsを用いたモダンフロントエンドの開発。
              <br />
              好きなものはプログラミング、Superfly、猫。
            </p>
            <div className="flex gap-4">
              {ICONS.map((icon) => {
                return (
                  <Link key={icon.link} href={icon.link}>
                    <a>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current"
                      >
                        <path d={icon.path} />
                      </svg>
                    </a>
                  </Link>
                );
              })}
            </div>

            <Link href="/about">
              <a className="flex justify-end items-center mt-4 font-bold text-blue-900 hover:text-white duration-300">
                <p>~ MORE</p>
                <span className="mb-1 ml-1 text-3xl">&#10230;</span>
              </a>
            </Link>
          </div>

          <div className="mt-8 md:mt-0 text-center md:text-left">
            <Image src="/img/selflogo.png" alt="self" width={200} height={300} />
          </div>
        </section>

        <section className="py-12 bg-blue-200">
          <div className="container">
            <Title variant="underlined" className="max-w-[80px] text-3xl md:text-4xl text-center">
              Blog
            </Title>
            <ul className="flex flex-col md:flex-row gap-6 md:justify-center pt-8">
              <Card />
              <Card />
              <Card />
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
              <Card />
              <Card />
              <Card />
            </ul>
            <div className="pt-8 text-center">
              <MoreButton href="/work" />
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-200">
          <div className="container text-center">
            <Title variant="underlined" className="max-w-[110px] md:max-w-[140px] text-3xl md:text-4xl text-center">
              Contact
            </Title>

            <div className="pt-8">
              <p className="font-bold">問い合わせは、メールもしくは電話にてご連絡ください。</p>
              <dl className="flex justify-center pt-5">
                <dt>電話番号：</dt>
                <dl>(+852) 6891 0740</dl>
              </dl>
              <dl className="flex justify-center pt-2">
                <dt>メールアドレス：</dt>
                <dl>gabriel6181997@gmail.com</dl>
              </dl>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
