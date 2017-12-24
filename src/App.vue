<template>
	<div id="app">
		<nav>
			<router-link :to="{ name: 'Patrick' }">Home</router-link>
			<router-link to="/Santa">Santa</router-link>
		</nav>
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 0px;
	}
	nav {
		background: linear-gradient(#ffffff, #5b91c0);
		height: 50px;
		line-height: 50px
	}
	nav a {
		box-shadow: 5, 5, 5, 5;
		color: #333;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		font-size: 22px;
		margin: 0 15px; 
	} 
</style>