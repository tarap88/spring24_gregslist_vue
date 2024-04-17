<script setup>
import { onMounted } from 'vue';
import { carsService } from '../services/CarsService.js';
import Pop from '../utils/Pop.js';

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
  </div>
</template>


<style scoped></style>