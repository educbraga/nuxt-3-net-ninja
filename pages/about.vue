<template>
	<h2>About</h2>
	<p>Lorem ipsum dolore est laborum dolor velit non proident consequat commodo. Ex laboris deserunt incididunt amet in in mollit mollit in dolor.</p>
	<p>Lorem ipsum dolore est laborum dolor velit non proident consequat commodo. Ex laboris deserunt incididunt amet in in mollit mollit in dolor.</p>
	<div>{{ data }}</div>
</template>
<script setup>
	const {data} = await useFetch('/api/ninja')
</script>
<style scoped>
	h2 {
		margin-bottom: 20px;
		font-size: 36px;
	}
	p {
		margin: 20px;
	}
</style>