<template>
  <div id='main-outer-container'>
    <div class='main-container'>
      <h1>Random Team Generator</h1>

      <div v-if='currentStep === 1'>
        <NumSelector label='teams' :number='numberOfTeams' :updateNumber='updateNumber'/>
        <NumSelector label='players' :number='playerNames.length' :updateNumber='updateNumber'/>
      </div>

      <div v-if='currentStep === 2'>
        <button class='back-button' @click="nextScreen('back')">back</button>
        <div v-for='(player, index) in playerNames' :key='index' >
          <PlayerNameInput :id='index' :updateNames='updateNames'/>
        </div>
      </div>

      <button class='next-button' @click="nextScreen('next')">next</button>
    </div>
  </div>
</template>

<script>
  import NumSelector from './components/NumSelector/NumSelector.vue';
  import PlayerNameInput from './components/PlayerNameInput/PlayerNameInput.vue';
  export default {
    name: 'App',
    components: {
      NumSelector,
      PlayerNameInput
    },
    data() {
      return {
        numberOfTeams: 2,
        playerNames: ['',''],
        currentStep: 1
      }
    },
    methods: {
      nextScreen(nextOrBack) {
        if (nextOrBack === 'next') {
          this.currentStep++
        } else if (nextOrBack === 'back') {
          this.currentStep--
        }
      },
      updateNumber(action) {
        const teamKey = {
          'teamsUp': 'this.numberOfTeams++',
          'teamsDown': 'this.numberOfTeams--'
        }
        eval(teamKey[action])
        this.updatePlayers(action)
      },
      updatePlayers(action) {
        if (action === 'playersUp') {
          this.playerNames.push('')
        } else if (action === 'playersDown') {
          this.playerNames.pop()
        }
      },
      updateNames(name, index) {
        this.playerNames[index] = name;
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
    .back-button {
      height: 30px;
      width: 50px;
      margin-left: -100px;
      margin-top: 10px;
    }
</style>
