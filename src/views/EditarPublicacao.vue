<template>
    <div class="form-container">
        <h1 v-if="publication.title">Atualizar {{ publication.title }}</h1>
        <form @submit="publicationEdit" method="put">
            <input type="text" v-model="publication.title" name="title" placeholder="título" />
            <textarea rows="5" cols="33"  type="text" v-model="publication.body" name="body" placeholder="Publicação" />
            <button type="submit">Editar</button>
        </form>
    </div>
</template>

<script>

    import axios from 'axios'
    
    export default {
        name: "EditarPublicacao",

        data() {
            return {
                publication: {
                    title: null,
                    body: null,
                },
            }
        },

        mounted() {
            this.pubShow();
        },

        methods: {
            publicationEdit(e) {
                e.preventDefault();
                
                axios
                .put(`http://localhost:3000/api/v1/publications/update/${this.$route.params.id}`, this.publication)
                .then(() => {
                    window.alert("Publicação atualizada")
                    this.$router.push(`/materia/${this.$route.params.id}`)
                })                    
                .catch(error => {
                    window.alert(`Um erro inesperado aconteceu, tente novamente.\n${error}`)
                })
            },

            async pubShow() {
                await axios
                .get(`http://localhost:3000/api/v1/publications/show/${this.$route.params.id}`)
                .then((response) => {
                    this.publication.title = response.data.title
                    this.publication.body = response.data.body
                })
            }

        }
    }
</script>

<style scoped>

    .form-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        box-shadow: 2px 2px 50px silver;
        border-radius: 20px;
    }

    h1 {
        padding: 2rem 1rem;
    }

    form {
        background-color: #f8f8ff;
        padding: 1rem;
        width: 100%;
        display: flex;
        border-radius: 20px;
        flex-direction: column;
    }

    form input {
        height: 3rem;
        border-radius: 5px;
        padding-left: 10px;
        margin-bottom: 15px;
        border: none;
        border-left: 3px solid #2ea2fa;
        font-size: 1.2em;
    }

    form textarea {
        border-radius: 5px;
        padding-left: 10px;
        padding-top: 10px;
        margin-bottom: 15px;
        border: none;
        border-left: 3px solid #2ea2fa;
        font-size: 1.2em;
    }

    form button {
        background-color: #2ea2fa;
        color: #fff;
        padding: 1rem;
        border: 1px solid #2ea2fa;
        font-size: 1.3em;
        border-radius: 5px;
    }

    form button:hover {
        cursor: pointer;
        background-color: #fff;
        color: #2ea2fa;
    }
</style>