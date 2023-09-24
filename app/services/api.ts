import axios from "axios";

class Api {
    protected apiUrl = axios.create({ baseURL: "https://api.themoviedb.org/3", headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` } });

    async searchMovies(query: string) {
        const response = await this.apiUrl.get(`/search/movie?query=${query}`);
        return response.data;
    }
}

export { Api };
