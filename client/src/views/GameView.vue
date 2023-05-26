<script setup lang="ts">
import GameCard from '@/components/GameCard.vue';
import images from '../utils/images';
import { MDBBtn } from 'mdb-vue-ui-kit';

const size = 6;
const rowTemplate = `repeat(${size}, 1fr)`;
let puzzleMatrix: number[] = [];
const columnTemplate = `repeat(${size}, 1fr)`;
let imageNumbers: number[] = [];

for(let i = 0; i < size*size/2; i++) {
  imageNumbers.push(Math.floor(Math.random() * 20));
}

for(let i = 0; i < imageNumbers.length; i++) {
  puzzleMatrix.push(imageNumbers[i]);
  puzzleMatrix.push(imageNumbers[i]);
}

for(let i = 0; i < puzzleMatrix.length; i++) {
  const j = Math.floor(Math.random() * (i + 1));
  [puzzleMatrix[i], puzzleMatrix[j]] = [puzzleMatrix[j], puzzleMatrix[i]];
}

console.log(puzzleMatrix);
</script>

<template>
  <div class="center-align">
    <div class="board">
      <h1>LEVEL: EASY</h1>
      <MDBBtn color="primary">Finish</MDBBtn>
    </div>
    <div
      class="playground"
      :style="`grid-template-rows: ${rowTemplate}; grid-template-columns: ${columnTemplate}`"
    >
      <GameCard v-for="n in puzzleMatrix" :key="n" :value="n">
        <img :src="images[n]" />
      </GameCard>
    </div>
  </div>
</template>