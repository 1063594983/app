<template>
	<q-page>
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

			<q-route-tab class="bg-positive" slot="title" to="/your/route" replace label="热门"/>
		</q-tabs>
		<router-view></router-view>
	</q-page>
</template>

<script>
	export default {
		data() {
			return {
				batteryStatus: 'determining...'
			}
		},
		methods: {
			updateBatteryStatus(status) {
				this.batteryStatus = `Level: ${status.level}, plugged: ${status.isPlugged}`;
			},
			onBackKeyDown(e) {
				e.preventDefault();
				alert('Hello!');
			},
			onResize(size) {
				console.log(size)
				this.$q.notify(size.width);
				this.$q.notify(size.height);
				// {
				//   width: 20 // 容器宽度（像素）
				//   height: 50 // 容器高度（像素）
				// }
			}
		},
		created() {
			// 我们注册事件, 参考插件的文档页面
			window.addEventListener('batterystatus', this.updateBatteryStatus, false);
			document.addEventListener("backbutton", this.onBackKeyDown, false);
		},
		beforeDestroy() {
			// 我们做一些清理工作;
			// 我们需要删除事件监听器
			window.removeEventListener('batterystatus', this.updateBatteryStatus, false)
		}
	}
</script>

<style>

</style>