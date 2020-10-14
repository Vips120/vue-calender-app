<template>
    <div class="card text-left card-deck" @click="activeDay(day.id)">
        
         <h4 class="card-title text-center">
        {{day.id}}
    </h4>
          <h5 class="card-header">
              {{day.abbvTitle}}
          </h5>
  <div class="card-body">
<CalendarEvent
v-for="(event,index) in day.events"
v-bind:key= index
v-bind:day= day
v-bind:event= event
/>

   
  
  </div>
</div>
</template>

<script>
import {store} from '../simplestore/store'
import CalendarEvent from './calendarEvent.vue'
export default {
    name:'CalendarDay',
    props:['day'],
    methods:{
      activeDay(id){
        //   alert(id);
        //   alert('hello');
        //   console.log(this.day);
          store.setActiveDay(id);
      }
    },
    components:{CalendarEvent}
}
</script>
<style scoped>
h4,h5 {
    font-size:12px;
}
  .card{
      margin-right: 10px;
      display: flex;
      align-content: space-between;
      font-size:12px;
     
  }
 .fa {
     padding:0px 2px;
}

 .card-header {
     border-bottom:2px solid black;
     font-size:12px;
 }

.card {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>