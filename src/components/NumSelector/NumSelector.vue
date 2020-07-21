<template>
  <section class='picker-outer-container'>
    <p>number of {{ label }}:</p>
    <div class='picker-num-btn-container'>
      <div class='number-display-container'>
        <p class='number-display'>{{ number }}</p>
      </div>
      <div class='plus-minus-button-container'>
        <button class='increment-button' @click="updateNumber('+')">⬆</button>
        <button class='increment-button' @click="updateNumber('-')">⬇</button>
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
        number: 2,
        pickerType: this.label
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
      },
      assignPickerType() {
        if (this.pickerType === )
      }
    },
    mounted() {
      this.assignPickerType()
    }
  }
</script>

<style>
  @import './NumSelector.css';
</style>
