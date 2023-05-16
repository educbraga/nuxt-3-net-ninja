<template>
	<div>
		<header>
			<nav>
				<NuxtLink to="/">Nuxt Dojo</NuxtLink>
				<ul>
					<li><NuxtLink to="/">Home</NuxtLink></li>
					<li><NuxtLink to="/about">About</NuxtLink></li>
					<li><NuxtLink to="/products">Products</NuxtLink></li>
					<a href="/about">normal link to about page</a>
				</ul>

			</nav>
		</header>
	</div>
	<h2>Home</h2>
	<p>Lorem ipsum dolore est laborum dolor velit non proident consequat commodo. Ex laboris deserunt incididunt amet in in mollit mollit in dolor.</p>
	<p>Lorem ipsum dolore est laborum dolor velit non proident consequat commodo. Ex laboris deserunt incididunt amet in in mollit mollit in dolor.</p>
</template>
<style scoped>
	h2 {
		margin-bottom: 20px;
		font-size: 36px;
	}
	p {
		margin: 20px;
	}
</style>