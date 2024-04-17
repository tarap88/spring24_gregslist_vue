import { AppState } from "../AppState.js";
import { Car } from "../models/Car.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"

class CarsService {
  async createCar(carData) {
    const response = await api.post('api/cars', carData)
    logger.log('CREATED CAR 🚓🔧', response.data)
  }
  async getCars() {
    const response = await api.get('api/cars')
    // NOTE logger is similar to console, will not break your application during deployment
    logger.log('GOT CARS 🚗', response.data);
    AppState.cars = response.data.map(pojo => new Car(pojo))
  }
}

export const carsService = new CarsService()