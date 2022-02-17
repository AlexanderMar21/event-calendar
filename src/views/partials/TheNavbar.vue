<template>
   <nav class="bg-primary w-100 py-2 px-3 text-white">
      <div class="container">
         <div class="d-flex justify-content-between align-items-center">
            <router-link to="/">
               <h1 class="text-white "><span>EVENT</span><span class="fs-4">ory</span></h1>
            </router-link>
            <div class="text-white">
               <router-link class="text-white mx-3 fs-4" :to="{ name: 'Events' }">EVENTS</router-link>
               <!-- <router-link class="text-white mx-3 fs-4" :to="{ name: 'CreateEvent' }">CREATE</router-link> -->
            </div>
         </div>
      </div>
   </nav>
</template>
<script>
export default {
  setup() {

  },
}
</script>