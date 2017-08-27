<template>
    <div class="titlebar">
        <nav class="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="#"> <img src="../assets/wtc-logo.png"
                    alt="logo"> {{ title }} </a> <a class="navbar-item" href="#" target="_blank">
                  <span class="icon" style="color: #333;">
                    <i class="fa fa-github"></i>
                  </span> </a>
            </div>
            <div class="navbar-item">
                {{ message }}
            </div>
            <div class="navbar-end">
                <a class="navbar-item" href="http://bulma.io/love/"> <span class="bd-emoji">❤️</span> {{icon}} </a>
                <p class="control">
                    <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.1.zip">
                        <span class="icon">
                            <i class="fa fa-download"></i>
                        </span>
                        <span>
                            Download
                        </span>
                    </a>
                </p>
            </div>
        </nav>
    </div>
</template>

<script>
	export default {
		name: 'titlebar',
		data() {
			return {
				title:   'Welcome to Your Vue.js App',
				message: 'Cool, cool, cool',
				icon:    'Love!'
			}
		}
	}
</script>

<style>

</style>
