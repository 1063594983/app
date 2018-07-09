<template>
	<q-layout view="lHh Lpr lFf">
		<q-layout-header>
			<div class="row items-center bg-positive" style="height: 50px;">
				<div class="col-2">
					<q-btn size="20px" flat round dense icon="arrow_back" @click="$router.back()" />
				</div>
				<div class="col-3"></div>
				<div class="col-7">
					发布
				</div>
			</div>
		</q-layout-header>

		<q-page-container>
			<div class="row">
				<div class="col-2">
				</div>
				<div class="col-8">
					<q-input placeholder="标题"></q-input>
				</div>				
			</div>
			<div class="row">
				<div class="col-2"></div>
				<div class="col-8">
					<q-btn class="full-width" label="分类"></q-btn>
				</div>
				<div class="arrow"></div>
			</div>
		</q-page-container>
	</q-layout>
</template>

<script>
	import { openURL } from 'quasar'

	export default {
		name: 'LayoutDefault',
		data() {
			return {
				leftDrawerOpen: this.$q.platform.is.desktop
			}
		},
		methods: {
			openURL
		}
	}
</script>

<style>

</style>