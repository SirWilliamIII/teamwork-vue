<template>
    <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile">
                <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-primary">
                        <p class="title">{{ title }}</p>
                        <p class="subtitle">{{ subtitle }}</p>
                    </article>
                    <article class="tile is-child notification is-warning">
                        <p class="title">...tiles</p>
                        <p class="subtitle">Bottom tile</p>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-info">
                        <p class="title">Middle tile</p>
                        <p class="subtitle">With an image</p>
                        <figure class="image is-4by3">
                            <img id="wtc-pic" src="../assets/wtc-logo.png">
                        </figure>
                    </article>
                </div>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                    <p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>
                    <div class="content">
                        <!-- Content -->
                    </div>
                </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-success">
                <div class="content">
                    <p class="title">Tall tile</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                        <!-- Content -->
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
	export default {
		name:    'tiles',
		data() {
			return {
				title:    'WTC3',
				subtitle: 'The early worm gets eaten first'
			}
		},
		methods: {}
	}
</script>

<style>
    #wtc-pic {
        width: 250px;
        height: auto;
    }
</style>
