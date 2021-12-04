<template>
    <div class="navbar">
        <div class="logo">
            <router-link to="/"><img src="@/assets/logo.png" alt="logo" /></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>
    .navbar {
        height: 5rem;
        background-color: #272727;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 3rem;
    }

    .logo {
        width: 3.5rem;
        height: 3.5rem;
    }

    .logo img {
        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
    }

    span {
        font-size: 1.2em;
        color: #f8f8ff;
    }

    span:hover {
        color: #2ea2fa;
    }
</style>