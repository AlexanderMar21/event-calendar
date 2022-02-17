<template>
   <div class="card mb-3" style="min-height:250px">
      <div class="row g-0">
         <div class="col-md-4">
            <img :src="event.picture" class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-8">
            <div class="card-body">
               <h5 class="card-title h2">{{ event.title }}</h5>
               <h4 class="">{{ event.eventType }}</h4>
               <p class="card-text">{{ event.description }}</p>
               <p class="card-text"><small class="text-muted">{{ event.date }} {{ event.time }}</small></p>
            </div>
         </div>
      </div>
   </div>
</template>
<script>

export default {
   props: {
      event: {}
   },
   setup(props) {


   }
}
</script>
