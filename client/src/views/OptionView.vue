<script setup lang="ts">
import { MDBInput, MDBRadio, MDBBtn } from 'mdb-vue-ui-kit';
import { reactive } from 'vue';

const level = reactive({
  difficulty: 'easy',
  size: 5,
  disabled: true
});

const changeLevel = (value: string) => {
  level.difficulty = value;
  
  switch(value) {
    case 'easy': level.size = 5; level.disabled = true; break;
    case 'medium': level.size = 10; level.disabled = true; break;
    case 'hard': level.size = 20; level.disabled = true; break;
    case 'custom': level.disabled = false; break;
    default: break;
  }
}



</script>

<template>
  <div class="center-align">
    <div class="option-modal">
      <h1>OPTION</h1>

      <div class="grid">
        <div class="g-col-6">
          <MDBRadio
            label="Easy"
            value="easy"
            @input="changeLevel('easy')"
            v-model="level.difficulty"
          />
          <MDBRadio
            label="Medium"
            value="medium"
            @input="changeLevel('medium')"
            v-model="level.difficulty"
          />
          <MDBRadio
            label="Hard"
            value="hard"
            @input="changeLevel('hard')"
            v-model="level.difficulty"
          />
          <MDBRadio
            label="Custom"
            value="custom"
            @input="changeLevel('custom')"
            v-model="level.difficulty"
          />
        </div>

        <div class="g-col-6">
          <MDBInput
            type="number"
            size="lg"
            v-model="level.size"
            :disabled="level.disabled"
            />
          &nbsp;&nbsp;X&nbsp;&nbsp;
          <MDBInput
            type="number"
            size="lg"
            v-model="level.size"
            :disabled="level.disabled"
          />
        </div>
      </div>

      <div class="content-center">
        <MDBBtn color="primary">START</MDBBtn>
      </div>
    </div>
  </div>
</template>