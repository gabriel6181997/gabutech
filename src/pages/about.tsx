import Image from "next/image";
import { Breadcrumb } from "src/components/separate/Breadcrumb";
import { Footer } from "src/components/separate/Footer";
import { Header } from "src/components/separate/Header";
import { Sidebar } from "src/components/separate/Sidebar";
import { Title } from "src/components/shared/Title";
import { HISTORIES } from "src/utils/historyutil";

const About = () => {
  return (
    <>
      <Header />
      <div className="mt-20 mb-10">
        <Breadcrumb />
        <div className="xl:container flex">
          <main className="w-2/3">
            <Title bigTitle variant="box" className="mb-6 text-4xl">
              About
            </Title>

            <Image src="/img/blogillustration.png" alt="blog-picture" width={900} height={450} />

            <p className="my-6">
              越境駆け出しエンジニアのガブリエルです。
              <br />
              私の経歴やスキルなどをあまり知らない方が多いので、それらについて少しお話しようと思います。
            </p>

            <Title variant="box" className="text-2xl">
              経歴
            </Title>

            <ul className="my-7 space-y-6">
              {HISTORIES.map((history) => {
                return (
                  <li className="flex items-center" key={history.title}>
                    <p className="mr-8 w-[60px] h-[60px] text-sm font-bold leading-[60px] text-center bg-blue-200 rounded-full">
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

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-bold text-blue-900 underline">フロントエンド</h3>
                <p>
                  HTML, CSS, JavaScript, jQuery, React, Next.js, TypeScript <br />
                  状態管理：Recoil
                </p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 underline">バックエンド</h3>
                <p>BFFがわかるフロントエンドエンジニアになれるように、Node .js (Express)とMySQLを勉強するつもり</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 underline">ホスティング</h3>
                <p>Vercel, Firebase</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 underline">baaS</h3>
                <p>Firebase (Firebase Authentication, Realtime Database, Firestore, Storage, Hosting)</p>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 underline">CMS</h3>
                <p>WordPress, microCMS</p>
              </div>
            </div>
          </main>

          <Sidebar />


        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
