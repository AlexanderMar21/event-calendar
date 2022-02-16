<template>
   <div class="container">
      <div class="row">
         <form @submit.prevent="submitForm()" class="col-12 col-md-8 offset-md-2 shadow-lg rounded-3 p-4 bg-white">
            <h1 class="text-primary h-3 py-3">Add Event</h1>
            <div class="row">

               <div class="mb-4 col-12 relative">
                  <label for="event-title" class="form-label">Title</label>
                  <input v-model="event.title" type="text" class="form-control" id="event-title"/>
                  <small v-if="v$.title.$error" class="text-danger form-error">
                     {{ v$.title.$errors[0].$message }}
                  </small>
               </div>

               <div class="mb-4 col-12 relative col-sm-6">
                  <label for="event-title" class="form-label">Date</label>
                  <input v-model="event.date" type="date" class="form-control" id="event-title"/>
                   <small v-if="v$.date.$error" class="text-danger form-error">
                     {{ v$.date.$errors[0].$message }}
                  </small>
               </div>

               <div class="mb-4 col-12 relative col-sm-6">
                  <label for="event-time" class="form-label">Time</label>
                  <input v-model="event.time" type="time" class="form-control" id="event-time"/>
                   <small v-if="v$.time.$error" class="text-danger form-error">
                     {{ v$.time.$errors[0].$message }}
                  </small>
               </div>

               <div class="mb-4 col-12 relative">
                  <label for="event-desc" class="form-label">Description</label>
                  <textarea v-model="event.description" name="" class="form-control" id="event-desc" rows="5"></textarea>
                   <small v-if="v$.description.$error" class="text-danger form-error">
                     {{ v$.description.$errors[0].$message }}
                  </small>
               </div>
               <div class="mb-4 col-12 relative col-sm-6">
                  <label for="event-picture" class="form-label">Picture</label>
                  <input ref="picture" @change="onFileChange" type="file" class="form-control" id="event-picture"/>
                  <!-- <small v-if="v$.description.$error" class="text-danger form-error">
                     {{ v$.description.$errors[0].$message }}
                  </small> -->
               </div>
               <div class="mb-4 col-12 relative col-sm-6">
                  <label for="event-type" class="form-label">Type</label>
                  <select v-model="event.eventType" name="type" class="form-control" id="event-type">
                     <option selected value="Sport">Sport</option>
                     <option value="Culture">Culture</option>
                     <option value="Health">Health</option>
                  </select>
                  <small v-if="v$.eventType.$error" class="text-danger form-error">
                     {{ v$.type.$eventType[0].$message }}
                  </small>
               </div>
               <div class="mb-4 col-12 relative col-sm-6">
                  <label for="event-contact-tel" class="form-label">Contact Tel.</label>
                  <input  v-model="event.telephone" placeholder="+12 3456 78900" type="text" class="form-control" id="event-contact-tel"/>
                  <small v-if="v$.telephone.$error" class="text-danger form-error">
                     {{ v$.telephone.$errors[0].$message }}
                  </small>
               </div>
               <div class="mb-4 col-12 relative col-sm-6">
                  <label for="event-contact-email" class="form-label">Contact email.</label>
                  <input  v-model="event.email" type="email" placeholder="smith@example.com" class="form-control" id="event-contact-email"/>
                  <small v-if="v$.email.$error" class="text-danger form-error">
                     {{ v$.email.$errors[0].$message }}
                  </small>
               </div>
               <div class="mb-4 col-12 relative col-sm-6">
                  <label for="event-location" class="form-label">Location</label>
                  <input v-model="event.location" type="text" class="form-control" id="location"/>
                  <small v-if="v$.location.$error" class="text-danger form-error">
                     {{ v$.location.$errors[0].$message }}
                  </small>
               </div>

            </div>
            <button type="submit" class="btn btn-primary text-white mt-4">Submit</button>
         </form>
      </div>
   </div>
</template>
<script>
import { reactive, computed } from 'vue'
import useVuelidate from "@vuelidate/core"
import { required, email, minLength } from "@vuelidate/validators"

export default {
  name: 'CreateEventForm',
   setup(){
      const event = reactive ({
         title: "",
         date: "",
         time: "",
         description: "",
         picture: "",
         eventType: "Sport",
         telephone: "",
         email: "",
         location: "",
      })

      const rules = computed(() => {
         return {
            title: { required, minLength: minLength(2) },
            date: { required },
            time: { required },
            description: { required,  minLength: minLength(15)  },
            picture: { required },
            eventType: { required },
            telephone: { required },
            email: { required, email },
            location: { required },
         }
      })
      const v$ = useVuelidate(rules, event);

      return { event, v$ }
   },
   methods: {
      async submitForm()
      {
         this.v$.$validate()
         if(this.v$.$error){
            console.log("tets")
            await this.$store.dispatch("storeEvent", this.event);
         }else {
            console.log("faild")
         }
      },
      onFileChange(event){
         console.log(event.target.files);
      }
   }
};

</script>
<style>
.relative {
   position: relative;
}
.form-error {
   padding-left: 13px;
   position: absolute;
   top: 100%;
   left: 0;
   width: 100%;
}

</style>