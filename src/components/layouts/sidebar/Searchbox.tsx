import  { memo } from "react";
import { SearchSvg  }from "src/components/icons/svg/SearchSvg";
import { useSearch } from "src/libs/hooks/useSearch";

export const Searchbox = memo(() => {
  const { searchKeyword, handleSearchKeyword, handleSearch } = useSearch();

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
