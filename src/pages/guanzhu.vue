<template>
	<div>
		<!-- content -->
		<q-scroll-area style="width: 100%; height: 500px;">
			<!-- Content here -->
			<div v-for="(article, index) in articles" :key="index">
				<div style="height: 100%; height: 100%;" @click="details(article.id)" v-ripple>
					<article-card :article-details="article"></article-card>
				</div>				
			</div>		
		</q-scroll-area>
	</div>
</template>

<script>
	import articleCard from '../components/article-card';
	
	export default {
		name: 'PageName',
		data() {
			return {
				
			}
		},
		computed: {
			articles() {
				return this.$store.state.article.favoriteArticle;
			}
		},
		components: {
			articleCard
		},
		methods: {
			details(articleId) {
				this.$q.notify(articleId);
				this.$router.push({
					path: '/article/' + articleId
				});	
			}
		}
	}
</script>

<style>

</style>