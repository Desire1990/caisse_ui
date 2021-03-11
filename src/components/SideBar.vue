<template>
  <div class="nav-side-menu">
    <div class="menu-list">
            <div>
                <a href="#"> <h2>UBUBIKO</h2></a>
           </div>    
        
        <li>
          <router-link to="/"><div class="icons"><i class="fa fa-tachometer" aria-hidden="true"></i>
</div>  Dashboard</router-link>
        </li>
         <li>
          <router-link to="/moncompte"><div class="icons"><i class="fa fa-usd" aria-hidden="true"></i>
 </div> Mon Compte </router-link>
        </li>
         <li>
           <router-link to="/membre"><div class="icons"><i class="fa fa-users" aria-hidden="true"></i>
</div>Membre </router-link>
        </li>
         <li>
           <router-link to="/aidesocial"> <div class="icons"><i class="fa fa-handshake-o" aria-hidden="true"></i>
</div>  Aide Social </router-link>
        </li>
             
    </div>
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
h2{
    font-family:  "Gill Sans Extrabold", sans-serif;
    font-weight: bold;
    color: #e1ffff;
    text-align: center;
  
}
.icons{
    align-content: flex-start;
    position: sticky;
}
.nav-side-menu {
  overflow: auto;
  font-family: verdana;
  font-weight: 200;
  background-color: #007bff;
  position: fixed;
  top: 0px;
  width: 300px;
  height: 100%;
  color: #e1ffff;
}

.nav-side-menu ul,
.nav-side-menu li {
  list-style: none;
  padding: 0px;
  margin: 0px;
  line-height: 35px;
  cursor: pointer;
}

.nav-side-menu li {
  padding: auto;
  font-size: 20px;
  padding-left: 0px;
  border-left: 3px solid #2e353d;
  border-bottom: 1px solid #23282e;
}
.nav-side-menu li a {
  text-decoration: none;
  color: #e1ffff;
}
.nav-side-menu li  i {
  padding-left: 10px;
  width: 20px;
  padding-right: 20px;
}
.nav-side-menu li:hover {
  border-radius: 1px solid #34cfdd;
  background-color: #4b7eb4;
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
body {
  margin: 0px;
  padding: 0px;
}
@media (max-width: 767px) {
  .nav-side-menu{
    position: relative;
    width: 100%;
    margin-bottom: 10px;
  }
  .nav-side-menu  {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10 !important;
    padding: 3px;
    background-color: #ffffff;
    color: #000;
    width: 40px;
    text-align: center;
  }

}
</style>
