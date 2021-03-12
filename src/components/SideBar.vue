<template>
		<div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="custom-menu">
					<button type="button" id="sidebarCollapse" class="btn btn-primary">
	          <i class="fa fa-bars"></i>
	        </button>
        </div>  
        <ul class="list-unstyled components mb-5">
          <li>
              <router-link to="/"><span class="fa fa-tachometer mr-3"></span> Dashboard</router-link>
          </li>
          <li>
            <router-link to="/moncompte"><span class="fa fa-dollar mr-3"></span> Mon Compte</router-link>
          </li>
          <li>
            <router-link to="/membre"><span class="fa fa-users mr-3"></span>Membre</router-link>
          </li>
          <li>
           <router-link to="/aidesocial"><span class="fa fa-handshake-o mr-3"></span> Caisse Social</router-link>
          </li>
        </ul>

    	</nav>
		</div>

</template>

<script>
export default {
  name: "SideBar",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style scoped>


</style>
