<template>
  <div class='main-outer-container'>
    <div class='main-container'>
      <h1 class='app-title'>Team Generator</h1>

      <div v-if='currentStep === 1' class='view-container'>
        <div class='nav-button-container'><div></div>
          <button class='arrow-button' @click="validatePlayersExceedTeams">→</button>
          <p v-if='playerCountErrorMessage' class='error-message'>*player count must exceed teams</p>
        </div>
        <NumSelector label='teams' :number='numberOfTeams' :updateNumber='updateNumber'/>
        <NumSelector label='players' :number='playerNames.length' :updateNumber='updateNumber'/>
      </div>

      <div v-if='currentStep === 2' class='view-container'>
        <div class='nav-button-container'>
          <button class='arrow-button' @click="nextScreen('back')">←</button>
          <button class='arrow-button' @click="validatePlayerNameInputs">→</button>
          <p v-if='nameInputsErrorMessage' class='error-message'>*each player must have a name</p>
        </div>
        <div class='player-name-inputs-container'>
          <PlayerNameInput
            v-for='(player, index) in playerNames'
            :key='index'
            :id='index'
            :updateNames='updateNames'/>
        </div>
      </div>

      <div v-if='currentStep === 3' class='view-container'>
        <div class='nav-button-container'>
          <button class='arrow-button' @click="nextScreen('back')">←</button>
        </div>
        <div class='team-card-display-container'>
          <TeamDisplay
            v-for='(team, index) in teamObjects'
            :key='index + Math.random()'
            :id='index'
            :playerNames='team.names' />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import NumSelector from './components/NumSelector/NumSelector.vue';
  import PlayerNameInput from './components/PlayerNameInput/PlayerNameInput.vue';
  import TeamDisplay from './components/TeamDisplay/TeamDisplay.vue';
  export default {
    name: 'App',
    components: {
      NumSelector,
      PlayerNameInput,
      TeamDisplay
    },
    data() {
      return {
        numberOfTeams: 2,
        playerNames: ['',''],
        teamObjects: [],
        currentStep: 1,
        playerCountErrorMessage: false,
        nameInputsErrorMessage: false
      }
    },
    methods: {
      buildTeamObjects(numOfTeams) {
        this.teamObjects = [];
        for (let i = 1; i <= numOfTeams; i++) {
          let teamObj = { teamID: i, names: [] }
          this.teamObjects.push(teamObj)
        }
      },
      distributeOddNumOfPlayers(names) {
        let sortedTeams = this.teamObjects.sort((a,b) => a.names.length - b.names.length)
        names.forEach(() => {
          sortedTeams.forEach(openSpot => {
            if (names.length) {
              let targetExtra = names.pop()
              openSpot.names.push(targetExtra)
            }
          })
        })
      },
      generateTeams(names, numOfTeams) {
        let numPerTeam = Math.floor(names.length / numOfTeams);
        this.buildTeamObjects(numOfTeams);
        this.teamObjects.forEach(team => {
          names.forEach(() => {
            if (team.names.length < numPerTeam) {
              let targetName = names.pop()
              team.names.push(targetName)
            }
          })
        })
        {names.length && this.distributeOddNumOfPlayers(names)}
        this.nextScreen('next');
      },
      validatePlayersExceedTeams() {
        if (this.numberOfTeams > this.playerNames.length) {
          this.playerCountErrorMessage = true;
        } else {
          this.nextScreen('next');
          this.playerCountErrorMessage = false;
        }
      },
      validatePlayerNameInputs() {
        let missingName = false;
        this.playerNames.find(name => {
          if (!name) {
            this.nameInputsErrorMessage = true;
            missingName = true;
        }})
        if (!missingName) {
          this.generateTeams(this.shuffleNames(this.playerNames), this.numberOfTeams);
          this.nameInputsErrorMessage = false;
        }
      },
      nextScreen(nextOrBack) {
        if (nextOrBack === 'next') {
          this.currentStep++
        } else if (nextOrBack === 'back') {
          this.nameInputsErrorMessage = false;
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
      },
      shuffleNames(a) {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
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
  @import './App.css';
</style>
