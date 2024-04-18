<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import HouseCard from '../components/HouseCard.vue'

const houses = computed(() => AppState.houses)
const account = computed(() => AppState.account)

async function getHouses() {
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.toast('House Gone', 'error')

  }
}

onMounted(() => {
  getHouses()
})
</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12 d-flex px-2">
        <h1 class="px-2">Housing</h1>
        <button v-if="account" class="btn btn-outline-primary p-0" title="Add a house posting"
          data-bs-toggle="offcanvas" data-bs-target="#houseOffCanvas" aria-controls="houseOffCanvas"><i
            class="mdi mdi-plus-circle fs-1"></i></button>
      </div>
    </section>
    <section class="row">
      <div v-for="house in houses" :key="house.id" class="col-12">
        <HouseCard :house="house" />

      </div>
    </section>
  </div>
  <HouseForm />
</template>


<style scoped></style>