<template>
  <div id='main-outer-container'>
    <div class='main-container'>
      <h1>Random Team Generator</h1>
      <div v-if='currentStep === 1'>
        <NumSelector label='teams' :number='numberOfTeams' :updateNumber='updateNumber'/>
        <NumSelector label='players' :number='playerNames.length' :updateNumber='updateNumber'/>
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
        playerNames: ['',''],
        currentStep: 1
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
        this.updatePlayers(action)
      },
      updatePlayers(action) {
        if (action === 'playersUp') {
          this.playerNames.push('')
        } else {
          this.playerNames.pop()
        }
      }
    },
    watch: {
      numberOfTeams() {
        if (this.numberOfTeams < 2) {this.numberOfTeams = 2}
      },
      playerNames() {
        if (this.playerNames.length < 2) {this.playerNames.push('')}
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
