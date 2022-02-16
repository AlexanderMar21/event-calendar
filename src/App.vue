<template>
  <div id="nav">
    <TheNavbar/>
    <main class="main py-5">
      <router-view/>
    </main>
  </div>
</template>
<script>
import TheNavbar from "./views/partials/TheNavbar.vue"
export default {
  components :{
    TheNavbar
  },
  setup() {

  },
}
</script>