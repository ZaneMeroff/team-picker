<template>
  <div id='main-outer-container'>
    <div class='main-container'>
      <h1>Random Team Generator</h1>
      <div v-if='currentStep === 1'>
        <NumSelector label='teams' :number='numberOfTeams' :updateNumber='updateNumber'/>
        <NumSelector label='players' :number='numberOfPlayers' :updateNumber='updateNumber'/>
        <button class='next-button' @click='nextScreen'>next</button>
      </div>
      <div>
        <PlayerNameInputScreen />
      </div>
    </div>
  </div>
</template>

<script>
  import NumSelector from './components/NumSelector/NumSelector.vue';
  import PlayerNameInputScreen from './components/PlayerNameInputScreen/PlayerNameInputScreen.vue';
  export default {
    name: 'App',
    components: {
      NumSelector,
      PlayerNameInputScreen
    },
    data() {
      return {
        numberOfTeams: 2,
        numberOfPlayers: 2,
        currentStep: 1,
        playerNames: [],
      }
    },
    methods: {
      nextScreen() {
        this.currentStep++
      },
      updateNumber(action) {
        const arrowKey = {
          'teamsUp': 'this.numberOfTeams++',
          'teamsDown': 'this.numberOfTeams--',
          'playersUp': 'this.numberOfPlayers++',
          'playersDown': 'this.numberOfPlayers--',
        }
        eval(arrowKey[action])
      },
      updatePlayerNames() {
        for (let i = 2; i < this.numberOfPlayers; i++) {
          this.playerNames.push('_')
        }
      }
    },
    watch: {
      numberOfTeams() {
        if (this.numberOfTeams < 2) {this.numberOfTeams = 2}
      },
      numberOfPlayers() {
        if (this.numberOfPlayers < 2) {this.numberOfPlayers = 2}
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
