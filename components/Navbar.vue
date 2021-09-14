<template>
    <nav>
        <b-container>
            <b-navbar toggleable="lg" type="dark">
                <b-navbar-brand ><nuxt-link to="/" class="brand">Raphy-webdev</nuxt-link></b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item><nuxt-link to="/">Accueil</nuxt-link></b-nav-item>
                    <b-nav-item><nuxt-link to="html-css">HTML / CSS</nuxt-link></b-nav-item>
                    <b-nav-item><nuxt-link to="git-github">Git / GitHub</nuxt-link></b-nav-item>
                    <b-nav-item><nuxt-link to="javascript">JavaScript</nuxt-link></b-nav-item>
                    <b-nav-item><nuxt-link to="autres">Autres</nuxt-link></b-nav-item>
                </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </b-container>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    nav {
        background-color: #124559;
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
        z-index: 9999;
    }

    .brand {
        color: #ffffff!important;
    }

    .nuxt-link-exact-active {
        color: #ffffff!important;
    }

    a {
        color: #C1C1C1;
        transition: 200ms color;
    }

    a:hover {
        text-decoration: none;
        color: #E9E9E9;
    }
</style>