<template>
	<div class="row">
		<div class="col-3 self-center">
			<q-icon name="account_circle" size="60px"></q-icon>
		</div>
		<div class="col-6 self-center">
			<p>hello</p>
		</div>
		<div class="col-3 self-center">
			<q-btn>
				<q-icon name="add" />关注
			</q-btn>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			authorDetails: Object
		}
	}
</script>

<style>
</style>