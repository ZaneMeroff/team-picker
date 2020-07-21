<template>
  <section class='picker-outer-container'>
    <p>{{ label }}</p>
    <div class='picker-num-btn-container'>
      <div class='number-display-container'>
        <p class='number-display'>{{ number }}</p>
      </div>
      <div class='plus-minus-button-container'>
        <button class='increment-button' @click="updateNumber('+')">+</button>
        <button class='increment-button' @click="updateNumber('-')">-</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NumSelector',
    props: {
      label: String
    },
    data() {
      return {
        number: 2
      }
    },
    methods: {
      updateNumber(plusOrMinus) {
        if (plusOrMinus === '+') {
          this.number++
        } else {
          if (this.number === 2) {
            return;
          } else {
            this.number--
          }
        }
      }
    }
  }
</script>

<style>
  @import './NumSelector.css';
</style>
