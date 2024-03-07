import axios from "axios";
import settings from "../util/settings";

const API_URL= settings.apiURL;

const services= () =>{
    return axios.get(`${API_URL}/mdsub.p_app_open_pos_list`);
}

export{services} ;