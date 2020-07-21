<template>
  <div id='main-outer-container'>
    <div class='main-container'>
      <h1>Random Team Generator App</h1>
      <NumSelector />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NumSelector from './components/NumSelector/NumSelector.vue';

export default {
  name: 'App',
  components: {
    NumSelector
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
</style>
