<template>
    <section class="ftco-section">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-7 col-lg-5">
                    <div class="login-wrap p-4 p-md-5">
                        <div class="icon d-flex align-items-center justify-content-center">
                        <span class="fa fa-user-o"></span>
                        </div>
                         <h3 class="text-center mb-4">Sign In</h3>
                        <form action="#" class="login-form">
                            <div class="form-group">
                                <input type="text" class="form-control rounded-left" placeholder="Username" required>
                            </div>
                            <div class="form-group d-flex">
                                <input type="password" class="form-control rounded-left" placeholder="Password" required>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="form-control btn btn-primary rounded submit px-3" @click="login">Login</button>
                            </div>
                        </form>
                    </div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>


export default {
     data() {
    return {};
  },
  methods: {
    login(){
      // axios post to /login
      let user = {} // response.data
      this.$emit("connected", user)
    }
  },
 
}
</script>
<style scoped>

</style>
