<template>
   <section class="container">
      <h1 class="display-4 text-primary">All the coolest events</h1>
      <div class="container mt-5">
         <div class="row">
            <div class="col-12 col-lg-6" style="cursor:pointer" v-for="event in events" :key="event.id" @click="navigate(event.id)">
               <EventItem :event="event" />
            </div>
         </div>
      </div>
   </section>
</template>

<script>
import EventItem from "../components/EventItem.vue";
import { useRouter } from 'vue-router'
import { onMounted , ref} from 'vue'
import { useStore } from 'vuex'
export default {
   components :{
      EventItem
   },
   setup() {
      const router = useRouter()
      const store = useStore();
      const events = ref([]);
      const navigate = (id)=>{
         router.push("/events/" + id)
      }

      onMounted(async ()=>{
         await store.dispatch("loadEvents");
         events.value = store.getters.getEvents;
      })

      return { events, navigate };
   },
}
</script>


<style>

</style>