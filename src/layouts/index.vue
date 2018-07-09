<template>
	<q-layout>
		<!-- Be sure to play with the Layout demo on docs -->

		<!-- (Optional) The Header -->

		<!-- (Optional) The Footer -->
		<q-layout-footer>
			<div class="row">
				<div class="col-5">
					<q-tabs>
						<q-route-tab class="bg-positive" slot="title" icon="map" to="/home" replace label="首页" />
						<q-route-tab class="bg-positive" slot="title" icon="assignment" to="/category" replace label="分类" />
					</q-tabs>
				</div>
				<div class="col-2 bg-positive">
					<q-fab color="purple" icon="add" direction="up">
						<div>
							<q-btn round icon="add" color="blue" @click="edit"></q-btn>
						</div>
					</q-fab>
				</div>
				<div class="col-5">
					<q-tabs>
						<q-route-tab class="bg-positive" slot="title" icon="assignment" to="/message" replace label="消息" />
						<q-route-tab class="bg-positive" slot="title" icon="map" to="/user-center" replace label="个人中心" />
					</q-tabs>
				</div>
			</div>
		</q-layout-footer>

		<!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
		<q-layout-drawer side="left" v-model="leftDrawer">
			<!-- QScrollArea is optional -->
			<q-scroll-area class="fit q-pa-sm">
				<!-- Content here -->

			</q-scroll-area>
		</q-layout-drawer>

		<q-page-container>
			<!-- This is where pages get injected -->
			<router-view />
		</q-page-container>

	</q-layout>
</template>

<script>
	export default {
		// name: 'LayoutName',
		data() {
			return {
				leftDrawer: true
			}
		},
		methods: {
			edit() {
				this.$router.push({
					path: '/edit'
				})
			}
		}
	}
</script>

<style>

</style>