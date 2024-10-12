import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../assets/logo.png'
import Dialoge from "./dialoge.component";

interface Props {
  children: React.ReactNode;
}

export default function Menu() {
  return (
    <aside className="flex flex-col"> 
    <div className="h-full">
      <div className="bg-neutral-900 rounded-xl flex items-center gap-1 text-white">
          <Image src={logo} alt="QUICK BET" width={320} height={100}/>
          <nav className="flex flex-row justify-between text-white">
            <ul>
                <Link className="p-4" href="/popular" >
                    POPULAR
                </Link>
                <Link className="p-4" href="/favorites" >
                    FAVORITES
                </Link>
            </ul>
          </nav>
          <div className="right-0 w-full flex flex-row justify-end pl-8">
            <button className="bg-neutral-900 rounded-xl p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button className="bg-neutral-900 rounded-xl p-2 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </button>
            <Dialoge/>
            </div>
      </div>
    </div>
  </aside>
  )
}