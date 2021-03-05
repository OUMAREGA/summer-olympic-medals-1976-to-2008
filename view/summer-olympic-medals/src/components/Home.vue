<template>
  <nav class="navbar container shadow-lg navbar-expand-lg navbar-dark text-left fixed-top bg-dark">
  <div class="container-fluid text-white ">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link mr-lg-5 mr-md-5" :to="{name: 'top_ten_gold'}">
            Top Ten Gold
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link mr-lg-5 mr-md-5" :to="{name: 'top_ten_silver'}">
            Top Ten Silver
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link mr-lg-5 mr-md-5" :to="{name: 'top_ten_bronze'}">
            Top Ten Bronze
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
