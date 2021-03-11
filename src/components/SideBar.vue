<template>
    <nav id="sidebar">
        <h1><a href="#" class="logo">Ububiko</a></h1>
        <ul class="list-unstyled components mb-5">
          <li class="active">
            <a href="#"><span class="fa fa-home mr-3"></span> Dashboard</a>
          </li>
          <li>
              <a href="#"><span class="fa fa-user mr-3"></span> Mon compte</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-sticky-note mr-3"></span> Credit</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-sticky-note mr-3"></span> Membres</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-paper-plane mr-3"></span> Aide sociale</a>
          </li>
          <li>
            <a href="#"><span class="fa fa-paper-plane mr-3"></span> Information</a>
          </li>
        </ul>
      </nav>
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

  #sidebar {
  min-width: 250px;
  max-width: 250px; 
  background: #212121;
  color: #fff;
  display: block; }
  #sidebar .h6 {
    color: #fff; }
  #sidebar.active {
    margin-left: -250px; }
    #sidebar.active .custom-menu {
      margin-right: -50px; }
  #sidebar h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px; }
    #sidebar h1 .logo {
      color: #fff;
      display: block;
      padding: 10px 30px;
      background: #2f89fc; }
  #sidebar ul.components {
    padding: 0; }
  #sidebar ul li {
    font-size: 16px; }
    #sidebar ul li > ul {
      margin-left: 10px; }
      #sidebar ul li > ul li {
        font-size: 14px; }
    #sidebar ul li a {
      padding: 15px 30px;
      display: block;
      color: rgba(255, 255, 255, 0.6);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); }
      #sidebar ul li a:hover {
        color: #fff;
        background: #2f89fc;
        border-bottom: 1px solid #2f89fc; }
    #sidebar ul li.active > a {
      background: transparent;
      color: #fff; }
      #sidebar ul li.active > a:hover {
        background: #2f89fc;
        border-bottom: 1px solid #2f89fc; }
  @media (max-width: 991.98px) {
    #sidebar {
      margin-left: -250px; }
      #sidebar.active {
        margin-left: 0; }
      #sidebar .custom-menu {
        margin-right: -60px !important;
        top: 10px !important; } }
  #sidebar .custom-menu {
    display: inline-block;
    position: absolute;
    top: 10px;
    right: 0;
    margin-right: -50px;
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s; }
    @media (prefers-reduced-motion: reduce) {
      #sidebar .custom-menu {
        -webkit-transition: none;
        -o-transition: none;
        transition: none; } }
    #sidebar .custom-menu .btn.btn-primary {
      background: transparent;
      border-color: transparent; }
      #sidebar .custom-menu .btn.btn-primary i {
        color: black;
        font-size: 24px; }
      #sidebar .custom-menu .btn.btn-primary:hover, #sidebar .custom-menu .btn.btn-primary:focus {
        background: transparent !important;
        border-color: transparent !important; }

</style>