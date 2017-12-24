<template>
	<div >
		<!-- <img class="hero-image" src="../assets/santa-clause.svg"> -->
		<div class="hero-image"></div>
		<h2>Names!</h2>
		<div>
			<input type="text" v-model="name" v-on:keyup.13="addName()" placeholder="add name here" />
			<button v-on:click="addName()" class="btn btn-primary btn-sm">Click this</button>
			<button v-on:click="randomize()" class="btn btn-primary btn-sm">Randomize</button>
		</div>

		<div v-if="names" class="card-container">
				<div v-for="(name, index ) in names" :class="['card-' + ((index % 2) + 1), 'card']">
					<p>{{name.text}}</p>
				</div>
		</div>


	</div>
</template>

<script type="text/javascript">
	export default {
		data () {
			return {
				name: '',
				names: []
			}
		},
		methods: {
			addName: function () {
				var newName = this.name.trim()
				if (!newName) { return }
				this.names.push(
					{text: newName}
				)
				this.name = ''
			},
			randomize: function () {
				let newNames = []
				let n = this.names.length
				let i

				while (n) {
					// Pick a remaining element…
					i = Math.floor(Math.random() * this.names.length)

					// If not already shuffled, move it to the new array.
					if (i in this.names) {
						newNames.push(this.names[i])
						delete this.names[i]
						n--
					}
				}
			}
		}
	}
</script>
<style type="text/css">
	.hero-image {
		width: 40%;
		background-image: url("../assets/santa-clause.svg");
		background-size: cover;
		margin: 0 0 0 44%;
		padding: 0; /* reset */
		padding-bottom: calc(100% / 10);
	}
	ul {
		list-style: none;
	}
	.card-container {
		width: 500px;
		margin: 0 auto;
	}
	.card {
		box-shadow: 5px 5px 5px #999;
		display: inline-block;
		font-size: 24px;
		font-weight: bold;
		height: 200px;
		margin: 20px;
		padding: 80px 20px;
		width: 200px;
	}
	.card-1 {
		background-color: rgba(0, 179, 0, .5);
	}
	.card-2 {
		background-color: rgba(127, 0, 0, .5);
	}
</style>