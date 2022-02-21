<template>
   <section class="container">
      <div class="d-flex justify-content-between align-items-start">
         <h1 data-test="events-heading" class="display-4 text-primary">All the coolest events</h1>
         <router-link data-test="add-event-btn" class="btn btn-primary text-white" :to="{ name: 'CreateEvent' }">Add Event</router-link>
      </div>
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
         <div v-if="filteredEvents.length > 0" class="row">
            <div class="col-12 col-lg-6" data-test="event-item" style="cursor:pointer" v-for="event in filteredEvents" :key="event.id" @click="navigate(event.id)">
               <EventItem :event="event" />
            </div>
         </div>
         <div v-else-if="loading" class="shadow-lg rounded-3 px-5 py-3">
            <h4 class="text-primary h2">Loading...</h4>
         </div>
         <div v-else class="alert alert-danger" role="alert">
            At the moment there are no events to display.
         </div>
      </div>

   </section>
</template>

<script>
import EventItem from "../components/EventItem.vue";
import { useRouter } from 'vue-router'
import { onBeforeMount , ref} from 'vue'
import { useStore } from 'vuex'

export default {
   components :{
      EventItem
   },
   setup() {
      const loading = ref(false);
      const router = useRouter()
      const store = useStore();
      const events = ref([]);
      const filterChoice = ref('');
      const filteredEvents = ref([]);

      const navigate = (id) => {
         router.push({name: "Event",params:{ id: id}})
      }

      const filter = () => {
         filteredEvents.value = events.value.filter( (event) =>{
            return event.eventType === filterChoice.value;
         })
      }

      const resetFilter = () => {
         filteredEvents.value = [...events.value];
         filterChoice.value = '';
      }

      onBeforeMount( async () => {
         loading.value = true;
         await store.dispatch("loadEvents");
         let data = store.getters.getEvents;
         events.value = data;
         filteredEvents.value = data;
         loading.value = false;
      })

      return {
         events, navigate ,
         filteredEvents, filter,
         resetFilter, filterChoice,
         loading
      };
   },
}
</script>


<style>

</style>