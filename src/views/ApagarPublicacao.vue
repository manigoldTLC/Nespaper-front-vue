<template>
    <div class="form-container">
        <h1>Apagar publicação</h1>
        <form @submit="publicationEdit" method="delete">
            <p>{{publication.title}}</p>
            <button type="submit">APAGAR</button>
        </form>
    </div>
</template>

<script>

    import axios from 'axios'
    
    export default {
        name: "ApagarPublicacao",

        data() {
            return {
                publication: {
                    title: null,
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
                .delete(`http://localhost:3000/api/v1/publications/delete/${this.$route.params.id}`, this.publication)
                .then(() => {
                    window.alert("Publicação apagada!")
                    this.$router.push('/')
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

    form p {
        height: 3rem;
        border-radius: 5px;
        padding-left: 10px;
        margin-bottom: 1.5rem;
        border: none;
        border-left: 3px solid red;
        font-size: 1.2em;
    }

    form button {
        background-color: red;
        color: #fff;
        padding: 1rem;
        border: 1px solid red;
        font-size: 1.3em;
        border-radius: 5px;
    }

    form button:hover {
        cursor: pointer;
        background-color: #fff;
        color: red;
    }
</style>