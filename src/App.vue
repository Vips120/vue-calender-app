<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <NumberDisplay />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NumberDisplay from './simplestore/numberdisplay.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
 NumberDisplay
  }
}
</script>
