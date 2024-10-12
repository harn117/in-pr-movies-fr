import React from "react";
import PopularComponent from "./popular.component";


export default function MoviesComponent() {
    return (
        <div>
            <PopularComponent title="Popular Movies" url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1">
                Popular Movies
            </PopularComponent>
            <PopularComponent title="Now Playing" url="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1">
                Now Playing
            </PopularComponent>
            <PopularComponent title="Top Rated" url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1">
                Top Rated
            </PopularComponent>
            <PopularComponent title="Upcoming" url="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1">
                Upcoming
            </PopularComponent>
            <PopularComponent title="Favorites" url="https://api.themoviedb.org/3/movie/favorites?language=en-US&page=1">
                Favorites
            </PopularComponent>
        </div>
    );
}