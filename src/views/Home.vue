<template>
  <main>
    <h1>Newspaper - confira tudo o que anda acontecendo hoje</h1>

    <section v-if="errored" class="grid">
      <div class="load">
        <p className='sub-text'>Desculpe, algo de errado aconteceu, tente novamente mais tarde</p>
      </div>
    </section>

    <div v-else class="grid">
      <div v-if="loading" class="load">
        <p className='main-text'></p>
        <p className='sub-text'>Aguarde enquanto os destinos são carregados</p>
      </div>

      <Miniatura v-else :publicacoes="publicacoes" />
    </div>

  </main>
</template>

<script>
  import Miniatura from '../components/Miniatura.vue';
  import CriarPublicacao from './CriarPublicacao.vue';

  import axios from 'axios'

  export default {
    name: "Home",

    components: {
      Miniatura,
      CriarPublicacao
    },

    data() {
      return {
        publicacoes: null,
        loading: true,
        errored: false,
      }
    },

    mounted() {
      this.getPublicacoes()
    },

    methods: {
      async getPublicacoes() {
        await axios
          .get('http://localhost:3000/api/v1/publications/index')
          .then(response => {
            this.publicacoes = response.data
          })
          .catch(error => {
            window.alert("Oops, algo de errado aconteceu, erro: ", error)
            this.errored = true
          })
          .finally(() => this.loading = false)
      }
    }
  }
</script>

<style scoped>
  main {
    margin: 8rem auto;
    max-width: 1200px;
  }

  h1 {
    font-size: 52px;
    margin-bottom: 1rem;
    text-align: center;
  }

  .span-home {
    font-weight: 100;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.3);
  }

  .grid {
    margin-top: 6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-left: 1.5rem;
  }

  .load {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: auto;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    color: #3A3B3C;
  }

  .load p{
      font-size: 1.37rem;
      opacity: 0.9;
  }

  .main-text:before{
      content: 'Carregando';
      font-weight: bold;
      animation-name: head;
      animation-duration: 4s;
      animation-iteration-count: infinite;
  }
  @keyframes head {
      25% {content: "Carregando."}
      50% {content: "Carregando.."}
      75% {content: "Carregando..."}
      100% {content: "Carregando"}
  }
  .sub-text{
      font-size: 1rem;
  }

</style>