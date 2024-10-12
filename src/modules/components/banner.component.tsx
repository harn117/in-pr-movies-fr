'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import KFP from "../../assets/kfp.jpg";

export default function Banner() {
    const [datos, setDatos] : any = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(process.env.MOVIES_URL || 'https://api.themoviedb.org/3/' + 'movie/top_rated?language=en-US&page=1', {
            headers: {
                'Authorization': `Bearer ${process.env.MOVIES_TOKEN || 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTZiMjgyZDFiODYyMzhhYmJmZjI5YTJiNTljZDFkNiIsIm5iZiI6MTcyODY2MDg1My40NDI5OTQsInN1YiI6IjY3MDVkYmYwMDAwMDAwMDAwMDU4NzVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yopjt2OmRAGl6A_leErMVzQgbr42zXFQVQ7M2Etppvw' }`
            }
        })
        .then(response => {
            setDatos(response.data);
            setCargando(false);
        })
        .catch(err => {
            setError(err);
            setCargando(false);
        });
    }, []);

    if (cargando) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos.</p>;
    const estiloFondo = {
        backgroundImage: 'url(/src/assets/kfp.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        width: '100%',
      };
    

  return (
    <div className="relative mx-auto h-1/2 bg-cover bg-center" style={estiloFondo}>
        <span>
            {
                <div className="flex flex-col position-absolute mt-8 left-0 w-full h-full">
                    <h1 className="text-3xl font-bold text-white p-4 capitalize">{datos.results[0].title}</h1>
                    <div className="flex items-center mt-2.5 mb-5 ">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse text-white">
                            <p>{datos.results[0].overview}</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{datos.results[0].vote_average}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py">
                        </a>
                    </div>
                </div>
            }
        </span>
    </div>
  );
}