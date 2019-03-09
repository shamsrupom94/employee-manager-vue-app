<template>
   <div class="navbar">
    <nav class="nav-extended green darken-1">
     <div class="nav-content">
       <router-link :to="{ name: 'Dashboard'}">
       <h2 class="nav-title"> Employee Manager </h2>
       <span>(Vuejs version)</span>
       </router-link>
        <a href="" class="btn-floating btn-large halfway-fab green">
       <router-link :to="{ name: 'NewEmployee'}" >
          <i class="material-icons">add</i>
       </router-link>
    </a>
     </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar nav{
      padding: 0 20px;
  }
</style>
