<template>
	<q-page padding>
		<!-- content -->
		<q-scroll-area style="width: 400px; height: 400px;">
			<div v-for="n in 10">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</div>
		</q-scroll-area>
	</q-page>
</template>

<script>
	export default {
		// name: 'PageName',
		data() {
			return {
				articles: [{
					author: "Jack Smith",
					title: 'The Title',
					content: "Hey let’s catch up soon. Do you want to grab lunch sometime this weekend? Let me know when you’re free...",
					star: 2000,
					commentNum: 250
				}, {
					author: "作者二 ",
					title: 'The Title2',
					content: "Hey let’s catch up soon. Do you want to grab lunch sometime this weekend? Let me know when you’re free...",
					star: 1500,
					commentNum: 400
				}, {
					author: "作者3",
					title: 'The Title3',
					content: "Hey let’s catch up soon. Do you want to grab lunch sometime this weekend? Let me know when you’re free...",
					star: 1800,
					commentNum: 250
				}]
			}
		}
	}
</script>

<style>

</style>