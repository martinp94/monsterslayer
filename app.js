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
		},
		attack: function() {

			const yourDamage = generateDamage(), monsterDamage = generateDamage();
			
			this.healthYou -= yourDamage; this.healthMonster -= monsterDamage;

			function generateDamage() {
				return Math.floor(Math.random() * 20) + 1;
			}
		},
		specialAttack: function() {

		},
		heal: function() {

		}
	}

});