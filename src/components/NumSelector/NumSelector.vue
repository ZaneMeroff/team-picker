<template>
  <section>
    <p>pick a number of teams:</p>
    <div class='picker-num-btn-container'>
      <div class='team-number-display-container'>
        <p class='team-number-display'>0</p>
      </div>
      <div class='plus-minus-button-container'>
        <button class='increment-button'>+</button>
        <button class='increment-button'>-</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NumSelector',
  props: {

  }
}
</script>

<style>
  @import './NumSelector.css';
</style>
