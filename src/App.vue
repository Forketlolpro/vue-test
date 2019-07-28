<template>
    <div id="app">
        <div class="header-wrapper">
            <h1>Рейтинг участников</h1>
            <TableSearch></TableSearch>
        </div>
        <UsersTable v-if="dataReady"></UsersTable>
    </div>
</template>

<script>
    import UsersTable from './components/UsersTable.vue';
    import TableSearch from './components/TableSearch'

    export default {
        name: 'app',
        components: {
            UsersTable,
            TableSearch
        },
        computed: {
            dataReady: function () {
                return this.$store.getters.DATAREADY
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
                    this.$store.dispatch('SET_DATAREADY', true);
                })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        text-align: center;
        color: #2c3e50;
        max-width: 900px;
        margin: 60px auto 0;
    }

    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;
    }
</style>
