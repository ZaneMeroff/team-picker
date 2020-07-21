<template>
  <section class='picker-outer-container'>
    <p>number of {{ label }}:</p>
    <div class='picker-num-btn-container'>
      <div class='number-display-container'>
        <p class='number-display'>{{ number }}</p>
      </div>
      <div class='plus-minus-button-container'>
        <button class='increment-button' @click="updateNumber(label, '+')">⬆</button>
        <button class='increment-button' @click="updateNumber(label, '-')">⬇</button>
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
        // pickerType: this.label
      }
    },
    methods: {}
  }
</script>

<style>
  @import './NumSelector.css';
</style>
