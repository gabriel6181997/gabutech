import Image from "next/image";
import { Layout } from "src/components/separate/Layout";
import { Title } from "src/components/shared/Title";
import { HISTORIES } from "src/utils/historyutil";

const About = () => {
  return (
    <>
      <Layout>
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
        <Title variant="box" className="text-2xl">
          最後に
        </Title>
        <p className="mt-7">
          いかがだったでしょうか？私に少しでも興味を持っていてくれれば幸いです。
          <br />
          ガブリエルのことをもっと知りたい、もしくはガブリエルと仕事してみたいと思う方は、お気軽にメールまたは電話にてご連絡ください。
        </p>
        <dl className="flex pt-5">
          <dt>電話番号：</dt>
          <dl>(+852) 6891 0740</dl>
        </dl>
        <dl className="flex pt-2">
          <dt>メールアドレス：</dt>
          <dl>gabriel6181997@gmail.com</dl>
        </dl>
      </Layout>
    </>
  );
};

export default About;
