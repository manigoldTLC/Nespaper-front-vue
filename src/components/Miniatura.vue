<template>
    <div class="container" v-for="publicacao in publicacoes" :key="publicacao.id">
        <div class="box">
            <router-link :to="{ name: 'Materia', params: { id: publicacao.id } }">
                <span class="titulo">{{ lenTitle(publicacao.title) }}</span>
            </router-link>
            <span class="mini-descricao">{{ lenDescription(publicacao.body) }}</span>
            <div v-if="admin" class="admin">
                <button @click="goToEdit(publicacao)" class="editar">Editar</button>
                <button @click="goToDelete(publicacao)"  class="apagar">Apagar</button>
            </div>

            <div v-else class="not-admin">
                <router-link :to="{ name: 'Materia', params: { id: publicacao.id } }">
                    <span class="ver">Ver publicação</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Miniatura",
        
        data() {
            return {
                admin: true
            }
        },

        props: {
            publicacoes: Array
        },

        methods: {
            lenTitle(title) {
                let lenTitle = title.length
                let newTitle = ""

                if (lenTitle > 18) {
                    newTitle += title.slice(0, 18)
                    return `${newTitle}...`

                } else {
                    return title
                }
            },

            lenDescription(des) {
                let lenDes = des.length
                let newDes = ""

                if (lenDes > 160) {
                    newDes += des.slice(0, 160)
                    return `${newDes}...`
                }

                else {
                    return des
                }
            },

            goToEdit(pubId) {
                this.$router.push({ name: 'EditarPublicacao', params: {id: pubId.id} })
            },

            goToDelete(pubId) {
                this.$router.push({ name: 'ApagarPublicacao', params: {id: pubId.id} })
            },
        },
    }
</script>

<style scoped>
    .container {
        width: 365px;
        height: 508px;
        border: 1px solid #000;
        border-radius: 20px;
        background-color: #fff;
        transition: .3s;
    }

    .container:hover {
        transform: translateY(-5px);
    }

    .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        height: 100%;
    }

    .admin {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        font-size: 1.1em;
    }

    .not-admin {
        display: flex;
        justify-content: flex-end;
        font-size: 1.1em;
    }

    .ver {
        padding: 10px;
        background-color: #272727;
        border: 1px solid #272727;
        color: #f8f8ff;
        border-radius: 5px;
        font-size: 1.1em;
    }

    .ver:hover {
        cursor: pointer;
        background-color: #f8f8ff;
        border: 1px solid #272727;
        color: #272727
    }

    .editar {
        padding: 10px;
        background-color: #2ea2fa;
        border: 1px solid #2ea2fa;
        color: #f8f8ff;
        border-radius: 5px;
        font-size: 1.1em;
    }

    .editar:hover {
        cursor: pointer;
        background-color: #f8f8ff;
        border: 1px solid #2ea2fa;
        color: #2ea2fa
    }

    .apagar {
        padding: 10px;
        background-color: red;
        border: 1px solid red;
        color: #f8f8ff;
        border-radius: 5px;
        font-size: 1.1em;
    }

    .apagar:hover {
        cursor: pointer;
        background-color: #f8f8ff;
        border: 1px solid red;
        color: red
    }

    a {
        text-decoration: none;
    }

    .titulo {
        height: 20%;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        color: #000000;
        display: flex;
        align-items: center;
    }

    .mini-descricao {
        height: 60%;
        font-size: 1.4em;
        line-height: 30px;
        color: #000000;
        display: flex;
        align-items: center;
    }
</style>