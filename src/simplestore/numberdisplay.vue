<template>
    <h2>
        {{data.numbers}}
    </h2>
    <input v-model="count" type="number" />
    <button type="button" class="btn btn-outline-primary"
    @click="addNumber(count)"
    >Submit</button>
</template>

<script>
import {store} from './store'
export default {
    name:'NumberDisplay',
    data:() => {
     return  {
         data: store.state,
   count:0
}
    },
    methods:{
        addNumber(count){
store.countNumber(count);
        }
    }
}
</script>