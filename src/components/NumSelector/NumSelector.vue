<template>
  <section class='picker-outer-container'>
    <p>number of {{ label }}:</p>
    <div class='picker-num-btn-container'>
      <div class='number-display-container'>
        <p class='number-display'>{{ number }}</p>
      </div>
      <div class='plus-minus-button-container'>
        <button class='increment-button-up' @click="updateNumber(buttonTypeUp)">⬆</button>
        <button class='increment-button-down' @click="updateNumber(buttonTypeDown)">⬇</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'NumSelector',
    props: {
      label: String,
      number: Number,
      updateNumber: Function
    },
    data() {
      return {
        buttonTypeUp: this.label + 'Up',
        buttonTypeDown: this.label + 'Down'
      }
    },
    methods: {}
  }
</script>

<style>
  @import './NumSelector.css';
</style>
