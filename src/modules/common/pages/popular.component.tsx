'use client'
import Card from "@/modules/components/card.component";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
    children: React.ReactNode;
    title: string;
    url: string;
}

export default function PopularComponent({ children, title, url }: Props) {

    const [datos, setDatos] : any = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios.get(url, {
            headers: {
                'Authorization': `Bearer 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MTZiMjgyZDFiODYyMzhhYmJmZjI5YTJiNTljZDFkNiIsIm5iZiI6MTcyODY2MDg1My40NDI5OTQsInN1YiI6IjY3MDVkYmYwMDAwMDAwMDAwMDU4NzVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yopjt2OmRAGl6A_leErMVzQgbr42zXFQVQ7M2Etppvw' }`
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

    return(
        <div className="flex flex-col bg-gray-700 border border-gray-600 rounded-lg shadow ">
            <h1 className="text-3xl font-bold text-white p-4 capitalize">{title}</h1>
            <div className="grid grid-cols-5 overflow-x-">
                {
                    datos.results.map((movie: any) => (
                        <Card key={movie.id} image={movie.poster_path} title={movie.title} description={movie.overview} rating={movie.vote_average} price={movie.price} />
                    ))
                }
            </div>
        </div>  
    )
}