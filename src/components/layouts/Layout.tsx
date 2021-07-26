import type { ReactNode, VFC } from "react";
import { ButtonNavigation } from "src/components/layouts/ButtonNavigation";
import { Footer } from "src/components/layouts/Footer";
import { Header } from "src/components/layouts/Header";
import { Sidebar } from "src/components/layouts/sidebar/Sidebar";

type Props = {
  children: ReactNode;
};

export const Layout: VFC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className="md:my-20 mt-12 mb-20">
        <div className="container block md:flex">
          <main className="md:w-2/3">{props.children}</main>

          <div className="md:px-9 mt-7 md:mt-0 md:w-1/3">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
      <div className="block md:hidden">
        <ButtonNavigation />
      </div>
    </>
  );
};
