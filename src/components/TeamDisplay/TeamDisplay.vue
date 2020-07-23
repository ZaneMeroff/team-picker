<template>
  <div class='team-display-outer-container'>
    <p>team {{ id + 1 }}</p>
    <p>players:</p>
    <ul v-for="name in playerNames" :key='name'>
      <li>{{ name }}</li>
    </ul>
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
