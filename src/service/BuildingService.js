import axios from "axios";

const BUILDINGS_REST_API_URL = 'http://localhost:8080/api/buildings';

class BuildingService {
    getBuildings() {
         return axios.get(BUILDINGS_REST_API_URL);
    }
    createBuilding(building) {
        return axios.post(BUILDINGS_REST_API_URL, building)
    }
    updateBuilding(buildingId, building){
        return axios.put(BUILDINGS_REST_API_URL + '/' + buildingId,building);
    }
    deleteBuilding(buildingId) {
        return axios.delete(BUILDINGS_REST_API_URL+ '/' + buildingId);
    }
}

export default new BuildingService();