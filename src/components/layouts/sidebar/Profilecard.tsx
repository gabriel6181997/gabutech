import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { GitHubSvg } from "src/components/icons/svg/GitHubSvg";
import { TwitterSvg } from "src/components/icons/svg/TwitterSvg";
import { MoreButton } from "src/components/shared/MoreButton";
import { client } from "src/libs/client";
import type { ProfileCard } from "src/types/types";

export const Profilecard = () => {
  const [info, setInfo] = useState<ProfileCard>();

  const getInfo = useCallback(async () => {
    try {
      const res: ProfileCard = await client.get({ endpoint: "profilecard" });
      setInfo(res);
    } catch (e) {
      throw new Error(`ブログ運営者の情報のデータを取得できませんでした！`);
    }
  }, []);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div>
      <h2 className="font-bold">プロフィール</h2>
      <div className="p-5 mt-2 text-center rounded-md border-2 border-blue-200">
        {info?.profileimage.url ? (
          <Image className="rounded-full" src={info?.profileimage.url} alt="profile" width={150} height={150} />
        ) : (
          <Image className="rounded-full" src="/public/img/selflogo.png" alt="profile" width={150} height={150} />
        )}
        <p className="mt-3 font-bold">ガブリエル</p>
        <p className="mt-1 text-sm">越境駆け出しエンジニア</p>
        <hr className="mx-auto mt-5 w-24 h-1 border-0 border-t-[2px] border-blue-200" />

        <div className="flex gap-4 justify-center mt-5">
          {info?.github ? (
            <Link href={info?.github}>
              <a>
                <GitHubSvg className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current" />
              </a>
            </Link>
          ) : (
            <Link href="https://github.com/gabriel6181997?tab=repositories">
              <a>
                <GitHubSvg className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current" />
              </a>
            </Link>
          )}

          {info?.twitter ? (
            <Link href={info?.twitter}>
              <a>
                <TwitterSvg className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current" />
              </a>
            </Link>
          ) : (
            <Link href="https://twitter.com/gabu_ITengineer">
              <a>
                <TwitterSvg className="block w-6 h-6 text-gray-400 dark:text-gray-200 fill-current" />
              </a>
            </Link>
          )}
        </div>

        <div className="mt-4">
          <MoreButton href="/about" />
        </div>
      </div>
    </div>
  );
};
