<script setup>
import localComponent from './components/localComponent.vue';
import boolComponent from './components/boolComponent.vue';
import VIfandVShow from './components/VIfandVShow.vue';
import componentA from './components/componentA.vue';
import componentB from './components/componentB.vue';
import componentC from './components/componentC.vue';
import bindComp from './components/bindComp.vue';

import { ref } from 'vue'

let selectedComponent = ref('componentA');
</script>

<template>
  <main>
    <localComponent class="bubble"></localComponent>
    <globalComponent value = 'this is global component called in main app component'></globalComponent>
    <boolComponent boolVariable = 'true'></boolComponent>
    <boolComponent boolVariable = 'false'></boolComponent>
    <VIfandVShow isVisible="true"></VIfandVShow>
    <VIfandVShow isVisible="false"></VIfandVShow>
    <div>
      <select v-model="selectedComponent">
        <option value="componentA">Component A</option>
        <option value="componentB">Component B</option>
        <option value="componentC">Component C</option>
      </select>
      <componentA v-if="selectedComponent==='componentA'"></componentA>
      <componentB v-if="selectedComponent==='componentB'"></componentB>
      <componentC v-if="selectedComponent==='componentC'"></componentC>
    </div>
    <bindComp></bindComp>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
