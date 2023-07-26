import api from "./api"

const getData = () => {
    return api.get(`${api.url.posts}`).then((res: any) => res.data)
}

const testService = {
    getData
}

export default testService;