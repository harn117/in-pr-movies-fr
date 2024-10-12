import React from "react";
import Image from "next/image";
interface Props {
  image: string;
  title: string;
  description: string;
  rating: number;
  price: number;
}

export default function Card({ image, title, description, rating }: Props) {
    const imageUrl = 'https://media.themoviedb.org/t/p/w220_and_h330_face' + image;
    console.log("🚀 ~ Card ~ imageUrl:", imageUrl)
  return (
    <div className="max-w-md rounded-lg shadow p-1">
        <a href="#">
            <img src={'https://media.themoviedb.org/t/p/w220_and_h330_face' + image} className=" rounded-t-lg" alt="movie image" width={500} height={500}  />
        </a>
        <div className="px-5 pb-5 bg-neutral-900 text-white">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tight">{title}</h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5 ">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <p>{description}</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{rating}</span>
            </div>
            <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">{rating}</span>
                <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">add fav</a>
            </div>
        </div>
    </div>
  )
}

