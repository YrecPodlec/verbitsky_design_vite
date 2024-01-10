import axios from "axios";
import {ServicesInterface} from "src/services/services.interface.ts";

class ProjectsService {
    async getAll(page=0){
        return axios.get<ServicesInterface[]>(import.meta.env.VITE_GETDATA+`/projects?page=${page}`)
    }
}
export default new ProjectsService()