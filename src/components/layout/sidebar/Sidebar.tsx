import { Archivecard } from "src/components/layout/sidebar/Archivecard";
import { Profilecard } from "src/components/layout/sidebar/Profilecard";
import { Searchbox } from "src/components/layout/sidebar/Searchbar";
import { Tagcard } from "src/components/layout/sidebar/Tagcard";

export const Sidebar = () => {
  return (
    <aside className="block">
      <Searchbox />

      <div className="mt-10">
         <Profilecard />
      </div>

      <div className="mt-10">
        <Tagcard />
      </div>

      <div className="mt-10">
        <Archivecard />
      </div>
    </aside>
  );
};
