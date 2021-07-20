import { Archivecard } from "src/components/layouts/sidebar/Archivecard";
import { Profilecard } from "src/components/layouts/sidebar/Profilecard";
import { Searchbox } from "src/components/layouts/sidebar/Searchbox";
import { Tagcard } from "src/components/layouts/sidebar/Tagcard";

export const Sidebar = () => {
  return (
    <aside className="block">
      <div className="flex flex-col-reverse md:flex-col">
        <div className="mt-10 md:mt-0">
          <Searchbox />
        </div>

        <div className="mt-10">
          <Profilecard />
        </div>
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
