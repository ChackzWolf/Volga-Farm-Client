import axios from "axios";
import { adminEndpoints } from "../constraints/admin.endpoints";

export const adminLogin= async(data)=>{
    const values = data
    const response = await axios.post(adminEndpoints.login, values);
    return response.data
}