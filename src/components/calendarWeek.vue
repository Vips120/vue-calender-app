<template>
    <h1>
        Calendar Week
    </h1>
<div class="container">
    <CalendarDay 
 v-for="day in items.seedData"
 v-bind:key="day.id"
 :day= day
/>
    </div>

</template>

<script>
import {store} from '../simplestore/store'
import CalendarDay from '../components/calendarDay.vue'

export default {
    name:'CalendarWeek',
    data:() => {
        return {items: store.state}
    },
    components:{
        CalendarDay
    }
}
</script>
<style scoped>
.container{
    display :flex;
align-content:space-around;
}
</style>