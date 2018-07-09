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
					<q-input align="center" class="text-green text-center" placeholder="标题" v-model="article.title"></q-input>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<q-editor fit style="height: 500px" v-model="article.content" />
				</div>
			</div>
			<q-page-sticky position="bottom" :offset="[0, 10]">
				<q-btn full-width class="full-width" color="green" @click="submit">提交</q-btn>
			</q-page-sticky>
		</q-page-container>
	</q-layout>
</template>

<script>
	import { openURL } from 'quasar'

	export default {
		name: 'LayoutDefault',
		data() {
			return {
				leftDrawerOpen: this.$q.platform.is.desktop,
				article: {
					title: '',
					content: ''
				}
			}
		},
		methods: {
			openURL,
			submit() {
				this.$store.commit('article/addArticle', this.article);
				this.$q.notify('发布成功');
			}
		}
	}
</script>

<style>

</style>