<template>
    <div class="card text-left">
          <h5 class="card-header">
              {{day.abbvTitle}}
          </h5>
  <div class="card-body">
    <h4 class="card-title text-center">
        {{day.id}}
    </h4>
    <a href="" class="btn btn-primary">
        Get Groceries
    </a>
    
    <i class="fa fa-pencil text-center" aria-hidden="true"></i>
    <i class="fa fa-trash" aria-hidden="true"></i>
  </div>
</div>
</template>

<script>
export default {
    name:'CalendarDay',
    props:['day']
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