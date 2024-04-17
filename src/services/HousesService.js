import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"


class HousesService {

    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('Getting houses', response.data)
        AppState.houses = response.data.map(house => new House(house))
    }
}

export const housesService = new HousesService()