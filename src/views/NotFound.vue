<template>
   <section class="container">
      <div class="row">
            <div class="rounded-3 d-flex col-12 col-md-6 offset-md-3 shadow-lg p-5 text-dark row">
               <h1 class="not-found col-12 col-sm-6">404</h1>
               <div class="col-12 col-sm-6 p-3">
                  <h2>Lost in Space</h2>
                  <router-link class="btn btn-secondary text-white" to="/" >Back to Home</router-link>
               </div>
            </div>
      </div>
   </section>
</template>

<script>
export default {

  setup() {

  },
}
</script>
<style scoped>
   .not-found {
      font-size: 100px;
      font-weight: bold;
   }
</style>