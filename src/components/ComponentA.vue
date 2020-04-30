<template>
    <div>
        <button v-on:click="toggle">Press A</button>
    </div>
</template>

<script>
    export default {
        name: "ComponentA",
        methods: {
            toggle: function (event) {
                console.log(event);
                this.$store.commit('startLoading');
            }
        }
    }
</script>

<style scoped>

</style>