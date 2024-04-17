<script setup>
import { Car } from '../models/Car.js';

defineProps({
  car: Car
})
</script>


<template>
  {{ car.make }}
</template>


<style scoped></style>