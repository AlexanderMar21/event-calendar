<template>
  <div class="home container">
      <h1 class="display-4 mb-4">Home</h1>
      <div class="home d-flex flex-column align-items-center justify-content-center p-5 shadow-lg rounded-3">
          <h2 class="display-2">Explore all events</h2>
          <div>
            <router-link class="btn btn-primary text-white" :to="{ name: 'Events' }">EXPLORE</router-link><span class="px-2"> OR </span>
            <router-link class="btn btn-secondary text-white" :to="{ name: 'CreateEvent' }">CREATE EVENT</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {

  setup() {

  },
}
</script>
