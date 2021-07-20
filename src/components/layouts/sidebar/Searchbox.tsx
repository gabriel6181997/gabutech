import { useRouter } from "next/dist/client/router";
import  { memo, useCallback, useState } from "react";
import { SearchSvg } from "src/components/icons/svg/SearchSvg";

export const Searchbox = memo(() => {
  const router = useRouter();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearchKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }, []);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchKeyword === "") {
        alert("キーワードを入力してください！");
        return;
      };
      router.push({
        pathname: "/search/result",
        query: { keyword: searchKeyword }
      });
    },
    [router, searchKeyword]
  );

  return (
    <form onSubmit={handleSearch} className="relative">
      <input
        className="block py-3 px-2 mx-auto w-full rounded-md border-2 border-blue-200"
        type="text"
        placeholder="検索"
        value={searchKeyword}
        onChange={handleSearchKeyword}
      />
      <button className="absolute top-[14px] right-2">
        <SearchSvg className="w-6 h-6 text-blue-300" />
      </button>
    </form>
  );
});

Searchbox.displayName = "Searchbox";
