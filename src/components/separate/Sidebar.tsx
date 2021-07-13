import { Archivecard } from "src/components/separate/Archivecard";
import { Categorycard } from "src/components/separate/Categorycard";
import { Profilecard } from "src/components/separate/Profilecard";
import { Searchbox } from "src/components/separate/Searchbar";

export const Sidebar = () => {
  return (
    <aside className="block px-9 w-1/3">
      <Searchbox />

      <div className="mt-10">
         <Profilecard />
      </div>

      <div className="mt-10">
        <Categorycard />
      </div>

      <div className="mt-10">
        <Archivecard />
      </div>
    </aside>
  );
};
