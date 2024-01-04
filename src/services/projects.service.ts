import axios from "axios";
import {ServicesInterface} from "src/services/services.interface.ts";

class ProjectsService {
    async getAll(){
        return axios.get<ServicesInterface[]>(import.meta.env.VITE_GETDATA+'/projects')
    }
}
export default new ProjectsService()