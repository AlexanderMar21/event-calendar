import axios from "axios";
const eventsStore = {    // vuex example
   state(){
      return{
         events: [],
      }
   },
   mutations: {
      setEvents( state, payload) {
         state.events = payload;
      },
      setEvent( state, payload) {
         state.events = payload;
      },

   },
   actions: {
      async loadEvents({commit}){
            try{
               const  data  = ( await axios.get("/api/v1/events")).data;
               commit("setEvents", data.events);
            }catch (error) {
               //
            }
      },
      async storeEvent({commit}, payload) {
         try{
            const data = ( await axios.post("/api/v1/events/index", payload)).data;
            commit("setEvent", data);
         }catch (error) {
            //
         }
      }
   },
   getters:{
      //
      allEvents(state) {
         return state.organizations;
      },

   }
};

export default eventsStore;