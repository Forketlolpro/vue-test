<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld v-bind:msg="textt"/>
    </div>
</template>

<script>
    /* eslint-disable */
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {
            HelloWorld
        },
        computed: {
            // геттер вычисляемого значения
            textt: function () {
                return JSON.stringify(this.$store.getters.USERS)
            }
        },
        created: function () {
            fetch('./users.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })
                .then(response => response.json())
                .then(json => {
                    this.$store.dispatch('SET_USERS', json.users);
                })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
