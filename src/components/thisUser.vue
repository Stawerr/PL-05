<template>
<div class="card">
  <img src="../../public/img/img_avatar.png" alt="Avatar" style="width:100%">
  <div class="container">
    <h4><b>{{$route.params.fname}} {{$route.params.lname}}</b></h4>  
    <p>{{$route.params.age}}</p> 
  </div>
</div>
</template>

<script>
export default {
   
}
</script>
<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 40%;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
</style>