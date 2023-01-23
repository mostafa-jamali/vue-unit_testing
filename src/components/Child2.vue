<template>
    <div class="child2">
        <button @click="clickMe">click me</button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Child2",
    methods: {
        clickMe() {
            console.log('clicked me!!')
            this.$emit('custom', true)
        }
    }
}
</script>

<style scoped>

</style>