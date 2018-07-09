<template>
	<div>
		<author-card></author-card>
		<q-scroll-area style="width: 100%; height: 450px;" class="quote">
			<!-- Content here -->
			<div v-for="x in 10" :key="x">
				{{ articleDetails.content }}
			</div>		
		</q-scroll-area>
	</div>
</template>

<script>
	import authorCard from './author-card'
	export default {
		data() {
			return {
				
			}
		},
		props: {
			articleDetails: {
				type: Object
			}
		},
		components: {
			authorCard
		}
	}
</script>

<style>
</style>