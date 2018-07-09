<template>
	<q-page v-touch-swipe.horizontal="handler">
		<div class="row items-center bg-positive" style="height: 50px;">
			<div class="col-1"></div>
			<div class="col-1">
				<q-icon name="search" size="30px" color="gray"></q-icon>
			</div>
			<div class="col-8">
				<q-input v-model="text" />
			</div>
			<div class="col-2">
				<q-icon name="settings_voice" size="30px" color="gray"></q-icon>
			</div>
		</div>
		<q-tabs>
			<q-route-tab class="bg-positive" slot="title" to="/home/guanzhu" replace label="关注" />
			<q-route-tab class="bg-positive" slot="title" to="/home/recommend" replace label="推荐" />
			<q-route-tab class="bg-positive" slot="title" to="/home/hot" replace label="热门" />
		</q-tabs>
		<router-view></router-view>
	</q-page>

</template>

<script>
	export default {
		// name: 'LayoutName',
		data() {
			return {
				urls: ["/home/guanzhu", "/home/recommend", "/home/hot"],
				text: ''
			}
		},
		methods: {
			handler(obj) {
				let currentIndex = this.urls.indexOf(this.$router.currentRoute.path);
				if(obj.direction === 'left') {
					currentIndex = (currentIndex + 1) % 3;
				} else if(obj.direction === 'right') {
					currentIndex = (currentIndex + 2) % 3;
				}
				this.$router.push({
					path: this.urls[currentIndex]
				})
			}
		}
	}
</script>

<style>

</style>