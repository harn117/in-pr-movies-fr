import { apiMovie } from "./axios.service";

export const getPopularMovies = async () => {
    const response = await apiMovie.get(process.env.MOVIES_URL + '/movie/popular');
    return response.data;
}