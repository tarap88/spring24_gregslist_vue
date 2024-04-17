<script setup>
import { Car } from '../models/Car.js';

defineProps({
  car: Car
})
</script>


<template>
  <div class="bg-light rounded shadow d-flex">
    <img :src="car.imgUrl" :alt="car.make + ' ' + car.model" class="img-fluid car-img rounded-start">
    <div class="p-3">
      <h2 class="fs-4">{{ car.year }} {{ car.make }} {{ car.model }}</h2>
      <h3 class="fs-5">${{ car.price }}</h3>
      <p>Listed on {{ car.createdAt.toLocaleDateString() }} by {{ car.creator.name }}</p>
      <p>{{ car.description }}</p>
    </div>
  </div>
</template>


<style scoped>
.car-img {
  width: 40%;
  height: 40vh;
  object-fit: cover;
}
</style>