<template>
  <section>
    <p>pick a number of teams:</p>
    <div class='picker-num-btn-container'>
      <div>
        <p>0</p>
      </div>
      <div class='plus-minus-button-container'>
        <button>+</button>
        <button>-</button>
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
