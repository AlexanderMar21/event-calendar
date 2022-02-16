<template>
   <section class="container">
      <h1 class="display-4 text-primary">All the coolest events</h1>
      <div class="mb-4 col-12 relative col-sm-3">
         <label for="event-type" class="form-label">Filter Events</label>
         <select ref="filterSelect" v-model="filterChoice" @change="filter" name="type" class="form-control mb-2" id="event-type">
            <option disabled selected value="">Filter</option>
            <option value="Sport">Sport</option>
            <option value="Culture">Culture</option>
            <option value="Health">Health</option>
         </select>
         <button @click="resetFilter" class="btn btn-warning text-white">Clear filters</button>
      </div>
      <div class="container mt-5">
         <div class="row">
            <div class="col-12 col-lg-6" style="cursor:pointer" v-for="event in filteredEvents" :key="event.id" @click="navigate(event.id)">
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
      const filterChoice = ref('');
      const filteredEvents = ref([]);

      const navigate = (id)=>{
         router.push("/events/" + id)
      }

      const filter = ()=>{
         filteredEvents.value = events.value.filter( (event) =>{
            return event.eventType === filterChoice.value;
         })
      }

      const resetFilter = ()=>{
         filteredEvents.value = [...events.value];
         filterChoice.value = '';
      }

      onMounted(async ()=>{
         await store.dispatch("loadEvents");
         let data = store.getters.getEvents;
         events.value = data;
         filteredEvents.value = data;

      })

      return { events, navigate , filteredEvents, filter, resetFilter, filterChoice};
   },
}
</script>


<style>

</style>