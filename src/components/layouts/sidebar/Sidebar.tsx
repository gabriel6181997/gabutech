import { Archivecard } from "src/components/layouts/sidebar/Archivecard";
import { Profilecard } from "src/components/layouts/sidebar/Profilecard";
import { Searchbox } from "src/components/layouts/sidebar/Searchbar";
import { Tagcard } from "src/components/layouts/sidebar/Tagcard";

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
