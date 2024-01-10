import axios from "axios";
import {ServicesInterface} from "src/services/services.interface.ts";

class ProjectsService {
    async getAll(page: number){
        return axios.get<ServicesInterface[]>(import.meta.env.VITE_GETDATA+`/projects?_limit=6&_page=${page}`)
    }
}
export default new ProjectsService()