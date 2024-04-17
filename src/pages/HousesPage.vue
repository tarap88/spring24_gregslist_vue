<script setup>
import { AppState } from '../AppState.js';
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';



const houses = computed(() => AppState.cars)
const account = computed(() => AppState.account)

async function getHouses(){
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.toast('Uh-oh, Houses are gone!', 'error')
    
  }
}

onMounted(()=> {
  getHouses()
  })

</script>







<template>
	<div class="container">
		<section class="row">
			<div class="col-12 mt-3 d-flex align-items-center gap-4">
				<h1>Houses</h1>
			</div>
		</section>
  </div>
        
</template>


<style scoped></style>