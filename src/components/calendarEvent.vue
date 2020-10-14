<template>
    <div class="container" :style="randombgColor">
        <div class="row">
            <div class="col-md-12">
                  <span class="btn btn-primary">
       {{event.details}} 
    </span>
     </div>
     <div class="text-center">
    <i class="fa fa-pencil text-center" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
     </div>

           
            </div>
        <!-- <div class="row">
         <div class="col-md-8">
             <div class="form-group">
                 <input type="text" placeholder="new event" class="form-control"/>
             </div>
             <p>
                 Day Event: <span>
                     {{titleForActiveDay}}
                 </span>
             </p>
             <button type="button" class="btn btn-outline-danger">submit</button>
         </div>
        </div> -->
    </div>
</template>

<script>
import {store} from '../simplestore/store'
export default {
    name:'CalendarEvent',
    props:['event','day'],
     computed:{
         randombgColor(){
           let colors = ['#3dcca6', '#3f3dcc', '#d50fdb'];
           let randomColor = colors[Math.floor(Math.random() * colors.length)];
           return `background-color: ${randomColor}`
         }
     }
}
</script>
<style scoped>
.container {
    margin-top: 20px;
    padding:10px;
    color:black;
}
.fa {
    padding:20px;
}

</style>