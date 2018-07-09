<template>
	<div>
		<q-tabs>
			<!-- 选项卡 - 注意slot="title" -->
			<q-tab default count="5" slot="title" name="comment" icon="message" />
			<q-tab slot="title" name="contributor" icon="fingerprint" />
			<q-tab alert slot="title" name="editApply" icon="account_box" />

			<q-tab-pane name="comment" style="padding: 0px;">
				<q-scroll-area class="fit q-pa-sm">
					<comment-card v-for="x in 10" :key="x"></comment-card>
				</q-scroll-area>
				
			</q-tab-pane>
			<q-tab-pane name="contributor">贡献者</q-tab-pane>
			<q-tab-pane name="editApply">修改申请</q-tab-pane>
		</q-tabs>
	</div>
</template>

<script>
	import commentCard from './comment-card'
	export default {
		data() {
			return {

			}
		},
		components: {
			commentCard
		}
	}
</script>

<style>

</style>