import type { ReactNode, VFC } from "react";
import { Breadcrumb } from "src/components/separate/Breadcrumb";
import { Footer } from "src/components/separate/Footer";
import { Header } from "src/components/separate/Header";
import { Sidebar } from "src/components/separate/Sidebar";

type Props = {
  children: ReactNode
}

export const Layout:VFC<Props> = (props) => {
  return (
    <>
      <Header />
      <div className="my-20">
        <Breadcrumb />
        <div className="xl:container flex">
          <main className="w-2/3">
            {props.children}
          </main>

          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

