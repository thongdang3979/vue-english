import axios from "axios";

const url = {
    baseUrl: "https://venusnail-test.husky.aegona.work/",
    posts: "wp-json/wp/v2/posts",
};

const instance = axios.create({
    baseURL: url.baseUrl,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});


const api = {
    url,
    instance,
    get: instance.get,
    put: instance.put,
    delete: instance.delete,
    post: instance.post,
};

export default api;