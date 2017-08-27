<template>
    <div id="app">
        <div class="column">
            <Titlebar/>
            <hr>
            <router-view>
            </router-view>
            <hr>
            <Foot/>
        </div>
    </div>
</template>

<script>
	import Titlebar from './components/Titlebar.vue'
	import Foot from './components/Foot.vue'
	export default {
		name:       'app',
		components: {
			Titlebar,
			Foot
		}
	}
</script>

<style>


</style>
