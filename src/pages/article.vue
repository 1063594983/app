<template>
	<q-layout>
		<!-- Be sure to play with the Layout demo on docs -->

		<!-- (Optional) The Header -->
		<q-layout-header>
			<div class="row items-center bg-positive" style="height: 50px;">
				<div class="col-2">
					<q-btn size="20px" flat round dense icon="arrow_back" @click="$router.back()" />
				</div>
				<div class="col-6"></div>
				<div class="col-2">
					<q-btn size="20px" flat round dense :icon="favoritStyle" />
				</div>
				<div class="col-2">
					<q-btn size="20px" flat round dense icon="more_vert" @click="rightDrawer = !rightDrawer" />
				</div>
			</div>
		</q-layout-header>
		<!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
		<q-layout-drawer side="right" v-model="rightDrawer">
			<!-- QScrollArea is optional -->
			<q-scroll-area class="fit q-pa-sm">
				<!-- Content here -->
				<side-menu></side-menu>
			</q-scroll-area>
		</q-layout-drawer>

		<q-page-container>
			<!-- This is where pages get injected -->
			<article-details :article-details="article"></article-details>
		</q-page-container>
		<q-page-sticky position="left" :offset="[18, 18]">
			<q-btn round icon="add" color="green"></q-btn>
		</q-page-sticky>
		<q-page-sticky position="buttom" :offset="[18, 18]">
			<div class="row">
				<div class="col-10">
					<q-input v-model="comment" placeholder="请输入评论" />
				</div>
				<div class="col-2">
					<q-icon name="create" size="25px" :color="commentIconColor "></q-icon>
				</div>
			</div>				
		</div>	
		</q-page-sticky>
	</q-layout>
</template>

<script>
	import articleDetails from '../components/article-details'
	import sideMenu from '../components/side-menu'
	export default {
		// name: 'LayoutName',
		data() {
			return {
				rightDrawer: true,
				favoritStyle: 'favorite',
				article: {
					id: '1',
					author: "Jack Smith",
					title: 'The Title',
					content: "Hey let’s catch up soon. Do you want to grab lunch sometime this weekend? Let me know when you’re free...",
					star: 2000,
					commentNum: 250
				},
				comment: '',
				style: 'blue'
			}
		},
		computed: {
			commentIconColor() {
				return this.comment === "" ? "grey" : "blue";
			}
		},
		methods: {
			touch() {
				this.$q.notify('hello');
			}
		},
		components: {
			articleDetails,
			sideMenu
		}
	}
</script>

<style>

</style>