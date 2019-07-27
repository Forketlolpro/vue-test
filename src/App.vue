<template>
    <div id="app">
        <h1></h1>
        <Table></Table>
    </div>
</template>

<script>
    import Table from './components/Table.vue'

    export default {
        name: 'app',
        components: {
            Table
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
