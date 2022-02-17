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
               commit("setEvents", data);
            }catch (error) {
               console.error(error);
            }
      },
      async storeEvent({commit}, payload) {
         const options = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
         };

         try{
            const data = ( await axios.post("/api/v1/events", payload, options)).data;
            commit("setEvent", data);
         }catch (error) {
            //
         }
      }
   },
   getters:{
      getEvents(state) {
         return state.events;
      },

   }
};

export default eventsStore;