<template>
  <Navbar />
  <router-view/>

</template>

<script>
  import Navbar from './components/Navbar';


  export default {
    components: {
      Navbar
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Galdeano', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #a5aaad;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #05A46E;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #a5aaad;
  }
</style>
