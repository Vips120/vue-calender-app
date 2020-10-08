<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <NumberDisplay /> -->
  <CalendarEntry/>
  <CalendarWeek/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NumberDisplay from './simplestore/numberdisplay.vue'
import CalendarEntry from './components/calendarEntry.vue'
import CalendarWeek from './components/calendarWeek.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
 NumberDisplay,
 CalendarEntry,
 CalendarWeek
  }
}
</script>
