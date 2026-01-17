import api from "../api";
import { DashboardProps } from "./types";

class DashboardService {
    async getDashboardData(): Promise<DashboardProps> {
       const response = await api.get("/dashboard");
         return response.data;
    }
}

export default new DashboardService();