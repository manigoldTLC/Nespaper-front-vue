<template>
    <section>
        <h1>{{ materia.title }}</h1>
        <span class="adicionado-data">Adicionado em {{ transformDate(materia.publication_date) }}</span>

        <span class="text">{{ materia.body }}</span>
    </section>
</template>

<script>
    const axios = require('axios');

    export default {
        name: "Materia",

        data() {
            return {
                materia: Object
            }
        },

        mounted() {
            this.getPublication();
        },

        methods: {
            async getPublication() {
                await axios
                .get(`http://localhost:3000/api/v1/publications/show/${this.$route.params.id}`)
                .then((response) => {
                    this.materia = response.data
                })
                .catch((error) => {
                    alert("Oops. Um erro inesperado aconteceu!", error)
                })
            },

            transformDate(date) {
                return String(date).split("-").reverse().join("/")
            },

        }
    }
</script>

<style scoped>
    section {
        margin: 8rem auto;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: 52px;
    }

    .adicionado-data {
        font-weight: 100;
        font-size: 22px;
        color: rgba(0, 0, 0, 0.3);
        margin-top: 1rem;
    }

    .text {
        margin-top: 2.5rem;
        font-size: 23px;
        line-height: 168.19%;
    }
</style>