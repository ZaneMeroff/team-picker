<template>
  <div class='player-name-input-div'>
    <input
      placeholder='player name...'
      class='player-name-input'
      v-model='name'
      @change="updateNames(name, id)"/>
  </div>
</template>

<script>
  export default {
    name: 'PlayerNameInput',
    props: {
      updateNames: Function,
      id: Number
    },
    data() {
      return {
        name
      }
    },
    methods: {}
  }
</script>

<style>
  @import './PlayerNameInput.css';
</style>
