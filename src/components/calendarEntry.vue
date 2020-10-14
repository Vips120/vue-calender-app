

<template>
    <div class="calendar-entry">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-deck">
                    <div class="card-body">
                         <input type="text" placeholder="enter event"
                 required
                 v-model="inputEntry"
                />
                <p class="alert alert-danger" v-if="error">
                    please enter something
                </p>
            </div>
            <div class="col-md-12">
                Day of Event: {{titleOfActiveDay}} 
            </div>
            <button type="button" class="btn btn-primary"
             @click="submitData(inputEntry)"
            >Submit</button>
                    </div>
 
                </div>
              
        </div>
    </div>
</template>

<script>
import {store} from '../simplestore/store'
export default {
    name:'CalendarEntry',
    data:() => {
        return { inputEntry: '', error:false}
    },
   computed:{
       titleOfActiveDay(){
           return store.getActiveday().fullTitle;
       }
   },
    methods:{
        submitData(input){
            if(input === ''){return this.error = true}
        store.submitEvent(input)
        this.inputEntry = '';
        this.error = false;
        }

    }
}
</script>
<style  scoped>
.calendar-entry {
    margin-top:20px;
    padding:20px;
   
}

button{
 margin:0px auto;
}
</style>