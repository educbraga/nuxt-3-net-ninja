<template>
	<div>
		<p>Product details for {{ id }}</p>
		<p>Id laborum excepteur sint do aliquip exercitation pariatur velit pariatur aliquip.</p>
	</div>
</template>
<script setup>
	const { id } = useRoute().params

	definePageMeta({
		layout: 'products'
	})
</script>