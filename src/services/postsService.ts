import api from "./api"

const getPosts = () => {
    return api.get(`${api.url.posts}`).then((res: any) => res.data)
}

const postsService = {
    getPosts
}

export default postsService;