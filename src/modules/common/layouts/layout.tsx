import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/modules/components/menu.component";
import Card from "@/modules/components/card.component";
interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="bg-neutral-800 mx-auto h-screen">
      <Menu/>
      <Card/>
    <section className="bg-neutral-900 rounded-xl p-8">
      {children}
    </section>
  </main>
  );
}
