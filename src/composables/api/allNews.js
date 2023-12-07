
const fetchNews = async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}v0/topstories.json?print=pretty`);
        return await response.json();
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};

const fetchNew = async (id) => {
    try {
        // По id запрашиваем данные для конкретного поста
        const responsePost = await fetch(`${import.meta.env.VITE_APP_BASE_URL}v0/item/${id}.json?print=pretty`);
        return await responsePost.json();
    } catch (event) {
        console.error(event);
    }
}


export { fetchNews, fetchNew }
