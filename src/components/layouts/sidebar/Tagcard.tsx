import { useCallback, useEffect, useState } from "react";
import { TagButton } from "src/components/shared/TagButton";
import { client } from "src/libs/client";
import type { Tags } from "src/types/types";

export const Tagcard = () => {
  const [tags, setTags] = useState<Tags>();

  const getTags = useCallback(async () => {
    try {
      const res: Tags = await client.get({ endpoint: "tags" });
      setTags(res);
    } catch (e) {
      throw new Error(`タグのデータを取得できませんでした！`)
    }
  }, []);

  useEffect(() => {
    getTags();
  }, [getTags]);

  return (
    <div>
      <h2 className="font-bold">タグ</h2>
      <ul className="flex flex-wrap gap-4 p-5 mt-2 rounded-md border-2 border-blue-200">
        {tags?.contents.map((tag, index) => {
          return <TagButton key={index} href={`/tag/${tag.tagName}`} title={tag.tagName} />;
        })}
      </ul>
    </div>
  );
};
