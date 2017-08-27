<template>
    <div class="titlebar">
        <nav class="navbar ">
            <div class="navbar-brand">
                <a class="navbar-item" href="http://bulma.io"> <img src="../assets/wtc-logo.png"
                    alt="logo"> </a> <a class="navbar-item">
                <router-link to="/" active-class="active" exact><a>
                    <button class="button is-success is-small">{{ home }}</button>
                </a>
                </router-link>
            </a> <a class="navbar-item">
                <router-link to="/signup" active-class="active"><a>
                    <button class="button is-success is-small">{{ signup }}</button>
                </a></router-link>
            </a>


            </div>
            <div class="nav-right nav-menu">
                <a class="nav-item is-active"> Home  </a> <a class="nav-item"> Examples </a> <a
                class="nav-item"> Documentation  </a> <span class="nav-item">
                            <a class="button is-primary is-inverted">
                                <span class="icon">
                                    <i class="fa fa-github"></i>
                                </span>
                                <span>
                                    Download
                                </span>
                            </a>
                        </span>
            </div>
        </nav>
    </div>
</template>

<script>
	export default {
		name: 'titlebar',
		data() {
			return {
				home:   'Home',
				signup: 'Signup'
			}
		}
	}
</script>

<style>

</style>
