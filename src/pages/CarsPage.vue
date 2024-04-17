<script setup>
import { computed, onMounted } from 'vue';
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import CarCard from '../components/CarCard.vue';

const cars = computed(() => AppState.cars)


async function getCars() {
  try {
    await carsService.getCars()
  }
  catch (error) {
    Pop.error(error);
  }
}

onMounted(() => {
  getCars()
})

</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12 mt-3">
        <h1>Cars</h1>
      </div>
    </section>

    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-12">
        <CarCard :car="car" />
      </div>
    </section>
  </div>
</template>


<style scoped></style>