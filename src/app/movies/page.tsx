import Layout from "@/modules/common/layouts/layout";
import MovieLayout from "@/modules/common/layouts/movie-layout.component";
import { getPopularMovies } from "@/services/popular-movies.service";
import React from 'react';

export default function MoviesPage() {
    const { data, error } = useQuery('popularMovies', getPopularMovies);
    console.log(data);
    if (error) return <div>Error: {error.message}</div>;
    return (
        <Layout>
            <h1>Movies</h1>
            <section className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3">
                <MovieLayout image="" title="" description="" rating={0} releaseDate="" genre="" />

            </section>
        </Layout>
    );
}

function useQuery(arg0: string, getPopularMovies: () => Promise<any>): { data: any; error: any; } {
    throw new Error("Function not implemented.");
}
