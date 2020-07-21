<template>
  <section>
    <p>pick a number of teams:</p>
    <div class='picker-num-btn-container'>
      <div class='team-number-display-container'>
        <p class='team-number-display'>{{ numberOfTeams }}</p>
      </div>
      <div class='plus-minus-button-container'>
        <button class='increment-button' @click="updateNumberOfTeams('+')">+</button>
        <button class='increment-button' @click="updateNumberOfTeams('-')">-</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NumSelector',
  props: {},
  data() {
    return {
      numberOfTeams: 2
    }
  },
  methods: {
    updateNumberOfTeams(plusOrMinus) {
      if (plusOrMinus === '+') {
        this.numberOfTeams++
      } else {
        if (this.numberOfTeams === 2) {
          return;
        } else {
          this.numberOfTeams--
        }
      }
    }
  }
}
</script>

<style>
  @import './NumSelector.css';
</style>
