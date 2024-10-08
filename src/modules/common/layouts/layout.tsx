import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/modules/components/menu.component";
import Card from "@/modules/components/card.component";
import Banner from "@/modules/components/banner.component";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="bg-neutral-800 mx-auto h-screen">
      <Menu/>
      <section className="bg-neutral-900 rounded-xl p-8">
        <Banner/>
      </section>
      <section className="bg-neutral-900 rounded-xl p-8">
        <Card/>
      </section>
      <section className="bg-neutral-900 rounded-xl p-8">
        {children}
      </section>
    </main>
  );
}
