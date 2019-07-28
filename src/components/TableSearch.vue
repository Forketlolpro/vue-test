<template>
    <form id="search">
        <input name="query" v-on:blur="hideInput()" v-on:focus="showInput()" @input="updateSearchQuery">
        <div class="magnifier" v-on:click="focusInput()"></div>
    </form>
</template>

<script>
    export default {
        name: "TableSearch",
        methods: {
            updateSearchQuery (e) {
                this.$store.dispatch('SET_SEARCHQUERY', e.target.value);
            },

            focusInput: function () {
                this.$el.querySelector('input').style.visibility = "visible";
                this.$el.querySelector('input').focus();
            },

            showInput: function () {
                this.$el.querySelector('input').style.visibility = "visible";
            },

            hideInput: function () {
                this.$el.querySelector('input').style.visibility = "hidden";
            }
        }
    }
</script>

<style scoped>
    #search {
        display: flex;
        align-items: center;
    }

    input {
        visibility: hidden;
    }
    .magnifier {
        width: 30px;
        height: 30px;
        background: url('../assets/search.png') center no-repeat;
        background-size: cover;
        margin-left: 15px;
    }
</style>