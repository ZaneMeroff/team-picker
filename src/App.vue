<template>
  <div id='main-outer-container'>
    <div class='main-container'>
      <h1>Random Team Generator</h1>
      <div v-if='displayNumPickers'>
        <NumSelector label='teams' />
        <NumSelector label='players' />
        <button class='next-button' @click='updateDisplayNumPickers'>next</button>
      </div>
    </div>
  </div>
</template>

<script>
import NumSelector from './components/NumSelector/NumSelector.vue';

export default {
  name: 'App',
  components: {
    NumSelector
  },
  data() {
    return {
      numberOfTeams: 2,
      numberOfPlayers: 2,
      displayNumPickers: true
    }
  },
  methods: {
    updateDisplayNumPickers() {
      this.displayNumPickers = !this.displayNumPickers;
    },
    updateNumber() {
      console.log('it works!');
    }
  }
}
</script>

<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  #main-outer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  .main-container {
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #000;
  }
  .next-button {
    height: 50px;
    width: 80px;
    margin: 20px;
  }
  .next-button:hover {
    cursor: pointer;
  }
</style>
