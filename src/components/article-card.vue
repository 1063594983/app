<template>
	<q-card inline style="width: 100%;">
		<q-card-title>
			{{ articleDetails.author }}
		</q-card-title>
		<q-card-main>
			<p>{{ articleDetails.title }}</p>
			<p class="text-faded">{{ articleDetails.content }}</p>
			<p class="text-faded">
				{{ articleDetails.star }}赞
				&nbsp;&nbsp;
				{{ articleDetails.commentNum }}评论
			</p>
		</q-card-main>
		<q-card-separator />
	</q-card>
</template>

<script>
	export default {
		props: {
			articleDetails: {
				type: Object,
				default: {
					author: "Jack Smith",
					title: 'The Title',
					content: "Hey let’s catch up soon. Do you want to grab lunch sometime this weekend? Let me know when you’re free...",
					star: 2000,
					commentNum: 2500
				}
			}
		},
		methods: {
			touch() {
				/*
				this.$router.push({
					path: '/article-details'
				})
				*/
				
				this.$q.notify('hello')
			}
		}
	}
</script>

<style>

</style>