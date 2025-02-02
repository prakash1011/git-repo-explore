import axios from 'axios';

const BASE_URL = "https://api.github.com/search/repositories?q=stars:>1000&sort=stars&order=desc";

export const fetchRepositories = async (query, language, sort) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                q: `${query} language:${language}`,
                sort: sort || "stars",
                order: "desc",
                per_page: 10
            }
        });
        return response.data.items;
    } catch (error) {
        console.error("Error fetching repositories:", error);
        return [];
    }
};