import axios from "axios";
import {ApiResponse} from "src/services/ApiResponse.interface.ts";

class ProjectsService {
    async getAll(page: number){
        return axios.get<ApiResponse>(import.meta.env.VITE_GETDATA+`/projects?limit=6&page=${page}`)
    }
}
export default new ProjectsService()