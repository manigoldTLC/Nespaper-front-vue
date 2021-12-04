<template>
    <div class="form-container">
        <form @submit="publicationCreate" method="post">
            <input type="text" v-model="publications.title" name="title" placeholder="título" />
            <textarea rows="5" cols="33"  type="text" v-model="publications.body" name="body" placeholder="Publicação" />
            <input type="text" v-model="publications.publication_date" name="publication_date" placeholder="Data Publicação" />
            <input v-model="publications.columnist_id" name="columnist_id" placeholder="Colunista" />
            <button type="submit">ADICIONAR</button>
        </form>
    </div>
</template>

<script>

    import axios from 'axios'
    
    export default {
        name: "CriarPublicacao",

        data() {
            return {
                publications: {
                    title: null,
                    body: null,
                    publication_date: null,
                    columnist_id: null
                }
            }
        },

        methods: {
            publicationCreate(e) {
                e.preventDefault();
                
                axios
                    .post('http://localhost:3000/api/v1/publications/create', this.publications)
                    .then(() => {
                        window.alert("Deu tudo certo!")
                        this.$router.push('/')
                    })                    
                    .catch(error => {
                        window.alert(`Um erro inesperado aconteceu, tente novamente.\n${error}`)
                    })
            },

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