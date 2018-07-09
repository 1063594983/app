<template>
	<div>
		<!-- content -->
		<q-scroll-area style="width: 100%; height: 500px;">
			<!-- Content here -->
			<article-card v-for="x in 4" :key="x"></article-card>
		</q-scroll-area>
	</div>
</template>

<script>
	import articleCard from '../components/article-card';
	
	export default {
		name: 'PageName',
		components: {
			articleCard
		}
	}
</script>

<style>

</style>