<template>
    <div class="titlebar">
        <nav class="navbar level">
            <div class="navbar-brand">
                <a class="navbar-item" href="#"> <img src="../assets/wtc-logo.png" alt="logo">
                    <strong>the third</strong></a>
            </div>
            <div class="nav-right nav-menu">
                <a class="navbar-item">
                    <router-link to="/" active-class="active" exact>
                        <a>
                            <button class="button is-success is-small">{{ home }}</button>
                        </a>
                    </router-link>
                </a> <a class="navbar-item">
                <router-link to="/signup" active-class="active"><a>
                    <button class="button is-success is-small">{{ signup }}</button>
                </a>
                </router-link>
            </a> <a class="navbar-item">
                <router-link to="/upload" active-class="active" exact>
                    <a>
                        <button class="button is-success is-small">{{ upload }}</button>
                    </a>
                </router-link>
            </a>
                <a class="navbar-item">
                <router-link to="/info" active-class="active" exact>
                    <a>
                        <button class="button is-success is-small">{{ info }}</button>
                    </a>
                </router-link>
            </a>
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
				signup: 'Signup',
				upload: 'Upload',
                info: 'Info'
			}
		}
	}
</script>

<style>

</style>
