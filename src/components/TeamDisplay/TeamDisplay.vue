<template>
  <div class='team-display-outer-container'>
    <p class='team-text'>team #{{ id + 1 }}</p>
    <div v-for="name in playerNames" :key='name'>
      <p>• {{ name }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TeamDisplay',
    props: {
      id: Number,
      playerNames: Array
    },
    data() {
      return {
        // code
      }
    },
    methods: {}
  }
</script>

<style>
  @import './TeamDisplay.css';
</style>
