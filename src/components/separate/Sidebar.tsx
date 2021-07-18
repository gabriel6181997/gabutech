import { Archivecard } from "src/components/separate/Archivecard";
import { Profilecard } from "src/components/separate/Profilecard";
import { Searchbox } from "src/components/separate/Searchbar";
import { Tagcard } from "src/components/separate/Tagcard";

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
