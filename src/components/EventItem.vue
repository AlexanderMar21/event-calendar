<template>
   <div class="card mb-3" style="min-height:250px">
      <div v-if="event" class="row">
         <div class="col-md-4">
            <img :src="event.picture" class="img-fluid rounded-start" alt="...">
         </div>
         <div class="col-md-8">
            <div class="card-body">
               <h5 data-test="event-title" class="card-title h2">{{ event.title }}</h5>
               <h4 class="h6">{{ event.eventType }}</h4>
               <p class="card-text">{{ event.description }}</p>
               <p class="card-text"><small class="text-muted">{{ event.date }} {{ event.time }}</small></p>
            </div>
         </div>
      </div>
      <div v-else class="row">
         <div class="alert alert-danger col-12" role="alert">
            An error has occurred.
         </div>
      </div>
   </div>
</template>
<script>

export default {
   props: {
      event: {
         type: Object,
         default: null
      }
   },
   setup(props) {


   }
}
</script>
