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

			const yourDamage = this.generateRandomInt(20), monsterDamage = this.generateRandomInt(20);
			
			this.healthYou -= yourDamage; this.healthMonster -= monsterDamage;

		},
		specialAttack: function() {

			const yourDamage = this.generateRandomInt(3), monsterDamage = this.generateRandomInt(30);

			this.healthYou -= yourDamage; this.healthMonster -= monsterDamage;
		},
		heal: function() {
			const heal = this.generateRandomInt(20), yourDamage = this.generateRandomInt(20);

			this.healthYou += heal - yourDamage;
		},
		generateRandomInt: function(max) {
			return Math.floor(Math.random() * max) + 1;
		}
	}

});