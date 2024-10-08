import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function Menu() {
  return (
    <aside className="flex flex-col"> 
    <div className="h-full">
      <div className="bg-neutral-900 rounded-xl flex items-center gap-1 text-white">
          <Image src="" alt="logo" width={32} height={32}/>
          <nav className="flex flex-row justify-between text-white">
            <ul>
                <Link className="p-4" href="/" >
                    POPULAR
                </Link>
                <Link className="p-4" href="/">
                    FAVORITES
                </Link>
            </ul>
          </nav>
      </div>
    </div>
  </aside>
  )
}