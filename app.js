new Vue({
	el: "#app",
	data: {
		healthYou: 100,
		healthMonster: 100,
		healthbarStyles: {
			background: 'green',
			margin: 0, 
			color: 'white'
		},
		gaveUp: false
	},
	methods: {
		restart: function() {
			
			this.gaveUp = false;
			this.healthMonster = 100;
			this.healthYou = 100;
		}
	}

});