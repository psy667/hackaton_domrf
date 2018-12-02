<template>
    <div id="app">
        <a class="logo" href="дом.рф">
            <img src="https://xn--80az8a.xn--d1aqf.xn--p1ai/%D0%BA%D0%B0%D1%82%D0%B0%D0%BB%D0%BE%D0%B3_%D0%BE%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%D0%BE%D0%B2/static/media/logo-icon.82730ceb.svg" alt="Дом.рф">
        </a>
        <div id="nav" class='tab tab-block'>
            <router-link to="/" class='tab-item'>Карта</router-link>
            <router-link to="/list" class='tab-item'>Список</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$store.dispatch("getData");
        }
    }

</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        max-height: 100vh;
        overflow: hidden;

        .logo{
            position: absolute;
            left: 10px;
            top: 10px;
        }
    }

    .tab {
        max-width: 500px;
        margin: auto !important;
    }

    #nav {
        padding: 30px;
        padding-top: 0;
        padding-bottom: 10px;
        border-bottom: 0;

        a {
            padding-top: 20px;
            border-bottom: 1px solid;
            border-bottom-color: #eee;
            color: #2c3e50;
            text-decoration: none;
            padding-bottom: 5px;

            &:focus {
                outline: 0 !important;
            }

            &.router-link-exact-active {
                border-bottom-color: #5755d9;
                border-bottom: 2px solid;
                color: #5755d9;
                width: 100%;
                display: block;
            }
        }
    }
</style>
