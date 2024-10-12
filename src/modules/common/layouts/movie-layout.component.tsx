import React from 'react';
import Image from 'next/image';
export default function MovieLayout(image: string, title: string, description: string, rating: number, releaseDate: string, genre: string) {
    return <div>
        <Image src={image} alt="Movie" />
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{rating}</p>
        <p>{releaseDate}</p>
        <p>{genre}</p>
    </div>;
}