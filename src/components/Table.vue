<template>
    <table>
        <thead>
        <tr>
            <th v-for="(key, index) in columns" :key="index"
                @click="sortBy(key)"
                :class="{ active: sortKey == key }">
                {{ key | capitalize }}
                <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                </span>
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(entry, index) in filteredList" :key="index">
            <td v-for="(key, index) in columns" :key="index">
                {{entry[key]}}
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    /* eslint-disable */
    export default {
        name: "table",
        computed: {
            usersList: function () {
                return this.$store.getters.USERS
            },
            columns: function () {
                return this.$store.getters.TABLEHEADERS
            },
            filterKey: function () {
                return this.$store.getters.SEARCHQUERY
            },
            sortOrders: function () {
                return this.$store.getters.SORTORDERS
            },
            filteredList: function () {
                let sortKey = this.sortKey;
                let filterKey = this.filterKey && this.filterKey.toLowerCase();
                console.log(this.sortOrders);
                let order = this.sortOrders[sortKey] || 1;
                let heroes = this.usersList;
                if (filterKey) {
                    heroes = heroes.filter(function (row) {
                        return Object.keys(row).some(function (key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }
                if (sortKey) {
                    heroes = heroes.slice().sort(function (a, b) {
                        a = a[sortKey];
                        b = b[sortKey];
                        return (a === b ? 0 : a > b ? 1 : -1) * order
                    })
                }
                return heroes
            }
        },
        filters: {
            capitalize: function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },
        methods: {
            sortBy: function (key) {
                this.$store.dispatch('SET_SORTKEY', key);
                this.$store.dispatch('SET_SORTORDERS', key);
            }
        },
        created: function () {
            let sortOrders = {};
            this.columns.forEach(function (key) {
                sortOrders[key] = 1
            });
            this.$store.dispatch('SET_SORTKEY', '');
            this.$store.dispatch('SET_SORTORDERS', sortOrders);
        }

    }
</script>

<style scoped>
    table {
        border: 2px solid #42b983;
        border-radius: 3px;
        background-color: #fff;
    }

    th {
        background-color: #42b983;
        color: rgba(255,255,255,0.66);
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    td {
        background-color: #f9f9f9;
    }

    th, td {
        min-width: 120px;
        padding: 10px 20px;
    }

    th.active {
        color: #fff;
    }

    th.active .arrow {
        opacity: 1;
    }

    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 4px solid #fff;
    }

    .arrow.dsc {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 4px solid #fff;
    }
</style>
