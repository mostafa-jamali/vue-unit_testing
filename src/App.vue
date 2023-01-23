<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">

        <!-- 1 -->
        <child1 msg="Welcome to Your Vue.js App"/>
        <!-- 2 -->
        <child2 @custom="onCustom"/>
        <p v-if="emitted">Emitted!</p>

    </div>
</template>

<script>
import Child1 from '@/components/Child1'
import Child2 from "@/components/Child2";

export default {
    name: 'App',
    components: {
        Child2,
        Child1
    },
    data() {
        return {
            emitted: false
        }
    },
    methods: {
        onCustom(value) {
            console.log('value :', value);
            this.emitted = value
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
