import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"


class HousesService {


    async createHouse(houseData) {
        const response = await api.post('api/houses', houseData)
        logger.log('House Created', response.data)
        const newHouse = new House(response.data)
        AppState.houses.unshift(newHouse)

    }



    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('Getting houses', response.data)
        AppState.houses = response.data.map(house => new House(house))
    }
}

export const housesService = new HousesService()