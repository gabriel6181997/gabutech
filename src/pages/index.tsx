import Image from "next/image";
import Link from "next/link";
import { Footer } from "src/components/separate/Footer";
import { Header } from "src/components/separate/Header";
import { Button } from "src/components/shared/Button";
import { Card } from "src/components/shared/Card";
import { ICONS } from "src/utils/iconutil";

const Home = () => {
  return (
    <>
      <Header />
      <main className="mx-auto mt-20">
        <div className="xl:container flex justify-around items-center mx-auto">
          <div>
            <p className="pb-2 text-5xl font-bold">ガブリエル</p>
            <p className="mb-16">越境駆け出しエンジニア</p>
            <p>
              国境を超えて〜 <br />
              Webエンジニア就職で日本へ
            </p>
          </div>
          <Image src="/img/fistviewtemporarylogo.png" alt="firstview" width={550} height={550} />
        </div>

        <section className="xl:container flex justify-center items-center my-16">
          <Image src="/img/selflogo.png" alt="self" width={200} height={300} />
          <div className="p-12 ml-24 max-w-[500px] bg-blue-200">
            <h2 className="relative after:absolute after:bottom-3 after:left-0 pb-4 after:w-28 after:h-1 text-4xl font-bold after:bg-blue-900">
              About
            </h2>
            <p className="py-4">
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
        </section>

        <section className="py-12 bg-blue-200">
          <div className="xl:container">
            <h2 className="relative after:absolute after:bottom-2 after:left-[46%] pb-4 after:w-28 after:h-1 text-4xl font-bold text-center after:bg-blue-900">
              Blog
            </h2>
            <ul className="flex gap-6 justify-center pt-8">
              <Card />
              <Card />
              <Card />
            </ul>

            <div className="pt-8 text-center">
              <Button />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="xl:container">
            <h2 className="relative after:absolute after:bottom-2 after:left-[46%] pb-4 after:w-28 after:h-1 text-4xl font-bold text-center after:bg-blue-900">
              Works
            </h2>
            <ul className="flex gap-6 justify-center pt-8">
              <Card />
              <Card />
              <Card />
            </ul>
            <div className="pt-8 text-center">
              <Button />
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-200">
          <div className="xl:container text-center">
            <h2 className="relative after:absolute after:bottom-2 after:left-[46%] pb-4 after:w-28 after:h-1 text-4xl font-bold text-center after:bg-blue-900">
              Contact
            </h2>
            <div className="pt-6">
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
