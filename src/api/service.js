import axios from "axios";
import settings from "../util/settings";

const API_URL= settings.apiURL;

const services= () =>{
    return axios.get(`${API_URL}/mdsub.p_app_open_pos_list/json?sTimeStamp=19012024-160151&sSessionId=E0986EF1CCA34E0D9C94AE9E12E91406&sRequestNo=-2&sRequestCode=OpenPosList&pContext=APP&sPagesize=500&sPageNumber=1&pActive=2`);
}

export { services } ;

