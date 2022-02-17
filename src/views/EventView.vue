<template>
   <section class="container">
      <div class="container">
         <div v-if="!loading" class="row">
               <div class="col-12 col-lg-6">
                  <img class="img-responsive w-100" :src="event.picture" alt="Event">
               </div>

               <div class="col-12 col-lg-6 mt-5 mt-lg-0">
                  <h1 class="h1 text-primary b-3">{{ event.title }}</h1>
                  <h6>{{ event.eventType }}</h6><br>
                  <p>Description<br> {{ event.description}}</p>
                  <p>When?<br> {{ event.date}} - {{ event.time }}</p>
                  <br><br>
                  <p>Contact info<br>Tel: <a :href="'tel:'+event.telephone" >{{ event.telephone }}</a>
                     <br> @: <a :href="'mailto:' + event.email"> {{ event.email }}</a>
                  </p>
               </div>
         </div>

         <div v-else-if="loading" class="shadow-lg rounded-3 px-5 py-3">
            <h4 class="text-primary h2">Loading...</h4>
         </div>

      </div>
   </section>
</template>

<script>
import axios from "axios";
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount, ref} from 'vue'
export default {

   setup() {
      const route = useRoute();
      const router = useRouter();
      const event = ref({});
      const loading = ref(false);

      onBeforeMount(async ()=>{
         loading.value = true;
         try{
            const data  = ( await axios.get("/api/v1/events/" + route.params.id )).data;
            event.value = data;
         }catch (error) {
            router.push({name:"404"});
         }
         loading.value = false;
      })

      return { event, loading };
   },
}
</script>


<style>

</style>