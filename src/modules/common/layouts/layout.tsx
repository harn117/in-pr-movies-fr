import React from "react";
import Menu from "@/modules/components/menu.component";
import Banner from "@/modules/components/banner.component";
import SearchComponent from "@/modules/components/search.component";
import MoviesComponent from "../pages/movies.component";
import Dialoge from "@/modules/components/dialoge.component";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="bg-neutral-800 mx-auto h-full">
      <Menu/>
      <section className="bg-neutral-900 rounded-xl p-8">
       <Banner/>
      </section>
      <section className="h-screen flex flex-row  rounded-xl p-8">
        <section className="bg-neutral-900 rounded-xl p-8">
          <SearchComponent/>
        </section>
        <section className="bg-neutral-900 rounded-xl p-8 w-full overflow-auto">
          <MoviesComponent/>
        </section>
        {/* <section className="">
         
        </section>
        <section className="bg-neutral-900 rounded-xl p-8">
          {children}
        </section> */}
      </section>
    </main>
  );
}
