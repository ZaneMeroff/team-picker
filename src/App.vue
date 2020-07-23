<template>
  <div id='main-outer-container'>
    <div class='main-container'>
      <h1>Random Team Generator</h1>

      <div v-if='currentStep === 1'>
        <NumSelector label='teams' :number='numberOfTeams' :updateNumber='updateNumber'/>
        <NumSelector label='players' :number='playerNames.length' :updateNumber='updateNumber'/>
        <button class='next-button' @click="nextScreen('next')">next</button>
      </div>

      <div v-if='currentStep === 2'>
        <button class='back-button' @click="nextScreen('back')">back</button>
        <div v-for='(player, index) in playerNames' :key='index' >
          <PlayerNameInput :id='index' :updateNames='updateNames'/>
        </div>
        <button class='next-button' @click="generateTeams(playerNames, numberOfTeams)">GO!</button>
      </div>

      <!-- <div v-if='currentStep === 3'>
        <div v-for='(team, index) in '>
          <TeamDisplay :id='index' :playerNames='playerNames' />
        </div>
      </div> -->


    </div>
  </div>
</template>

<script>
  import NumSelector from './components/NumSelector/NumSelector.vue';
  import PlayerNameInput from './components/PlayerNameInput/PlayerNameInput.vue';
  // import TeamDisplay from './components/TeamDisplay/TeamDisplay.vue';
  export default {
    name: 'App',
    components: {
      NumSelector,
      PlayerNameInput,
      // TeamDisplay
    },
    data() {
      return {
        numberOfTeams: 2,
        playerNames: ['',''],
        teamObjects: [],
        currentStep: 1
      }
    },
    methods: {
      generateTeams(names, numOfTeams) {
        let numPerTeam = Math.floor(names.length / numOfTeams)
        let teamObjArray = []
        for (let i = 1; i <= numOfTeams; i++) {
          let teamObj = { teamID: i, names: [] }
          teamObjArray.push(teamObj)
        }
        teamObjArray.forEach(team => {
          names.forEach(name => {
            console.log(name);
            if (team.names.length < numPerTeam) {
              let targetName = names.pop()
              team.names.push(targetName)
            }
          })
        })
        if (names.length) {
          let sortedTeams = teamObjArray.sort((a,b) => a.names.length - b.names.length)
          names.forEach(extraName => {
            console.log(extraName);
            sortedTeams.forEach(openSpot => {
              if (names.length) {
                let targetExtra = names.pop()
                openSpot.names.push(targetExtra)
              }
            })
          })
        }
        this.nextScreen('next');
        this.teamObjects = teamObjArray;
      },
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
