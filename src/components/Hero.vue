<template>
    <div id="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    {{ title }}
                </h1>
                <h2 class="subtitle">
                    {{ subtitle }}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name:    'hero',
		data() {
			return {
				title: 'WTC3',
                subtitle: 'The early worm gets eaten first'
            }
		},
		methods: {}
	}
</script>

<style>
</style>
