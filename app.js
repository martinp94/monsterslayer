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
		gaveUp: false,
		log: [],
		turns: {
			'.log ul .player-turn': false,
			'.log ul .monster-turn': false
		}
	},
	methods: {
		restart: function() {
			
			this.gaveUp = false;
			this.healthMonster = 100;
			this.healthYou = 100;
			this.log = [];
		},
		attack: function() {

			const yourDamage = this.generateRandomInt(20), monsterDamage = this.generateRandomInt(20);
			
			this.healthYou -= yourDamage; this.healthMonster -= monsterDamage;

			this.log.push({
				type: 'attack',
				playerDmg: yourDamage,
				monsterDmg: monsterDamage
			});

		},
		specialAttack: function() {

			const yourDamage = this.generateRandomInt(3), monsterDamage = this.generateRandomInt(30);

			this.healthYou -= yourDamage; this.healthMonster -= monsterDamage;

			this.log.push({
				type: 'attack',
				playerDmg: yourDamage,
				monsterDmg: monsterDamage
			});
		},
		heal: function() {
			const heal = this.generateRandomInt(20), yourDamage = this.generateRandomInt(20);

			this.healthYou += heal - yourDamage;

			this.log.push({
				type: 'heal',
				playerDmg: yourDamage,
				playerHeal: heal
			});
		},
		generateRandomInt: function(max) {
			return Math.floor(Math.random() * max) + 1;
		}
	}

});