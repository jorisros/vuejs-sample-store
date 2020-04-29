<template>
    <div>sComponent B {{ isLoading }}</div>
</template>

<script>
    export default {
        name: "ComponentB",
        computed: {
            isLoading() {
                console.log(this.$store.getters.isLoading)
                return this.$store.getters.isLoading;
            }
        },
    }
</script>

<style scoped>

</style>