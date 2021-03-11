
<template>
<!-- Navbar-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Brand -->
<div class="brand"><h1> Pharmacy</h1></div>
    </div>
    <!-- Left elements -->

  
    <!-- Right elements -->
    <div class="topbar"> 
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1">
        <a class="nav-link d-sm-flex align-items-sm-center" href="#">
          <img
            src="https://mdbootstrap.com/img/new/avatars/1.jpg"
            class="rounded-circle"
            height="22"
            alt=""
            loading="lazy"
          />
          <strong class="d-none d-sm-block ms-1">GBstallman</strong>
        </a>
      </li>
      <li class="">
        <a >
          <i class="fa fa-power-off">Logout</i>
        </a>
        
      </li>
    </ul>
    <!-- Right elements -->
    </div>
  </div>
</nav>
<!-- Navbar -->
</template>

<script>
export default {
  name: 'TopBar',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
};
</script>

<style scoped>
.router :hover {
   text-decoration: none;
  list-style: none;
}
</style>

