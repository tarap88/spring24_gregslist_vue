import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class CarsService {
  async getCars() {
    const response = await api.get('api/cars')
    // NOTE logger is similar to console, will not break your application during deployment
    logger.log('GOT CARS 🚗', response.data);
  }
}

export const carsService = new CarsService()