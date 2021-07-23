import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";

export const useSearch = () => {
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
      }
      router.push({
        pathname: "/search/results",
        query: { keyword: searchKeyword },
      });
    },
    [router, searchKeyword]
  );

  return { searchKeyword, handleSearchKeyword, handleSearch };
};
