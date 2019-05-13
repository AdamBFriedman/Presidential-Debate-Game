let player;

function Player(name, health, influence, strength, agility, speed) {
	this.name = name;
	this.health = health;
	this.influence = influence;
	this.strength = strength;
	this.agility = agility;
	this.speed = speed;
}

let PlayerMoves = {
	calcAttack: function() {
		//Who attacks first?
		let getPlayerSpeed = player.speed;
		let getEnemySpeed = enemy.speed;

		//Player attacks
		let playerAttack = function() {
			let calcBaseDamage;
			if (player.influence > 0) {
				calcBaseDamage = player.strength * player.influence / 2000;
			} else {
				calcBaseDamage = player.strength * player.agility / 2000;
			}
			let offsetDamage = Math.floor(Math.random() * Math.floor(10));
			let calcOutputDamage = calcBaseDamage + offsetDamage;
			//Number of hits
			let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
			let attackValues = [calcOutputDamage, numberOfHits];
			return attackValues;
			function play(){
				var audio = document.getElementById("audio");
				audio.play();
		   }
		};

		//Enemy attacks
		let enemyAttack = function() {
			let calcBaseDamage;
			if (enemy.influence > 0) {
				calcBaseDamage = enemy.strength * enemy.influence / 2000;
			} else {
				calcBaseDamage = enemy.strength * enemy.agility / 2000;
			}
			let offsetDamage = Math.floor(Math.random() * Math.floor(10));
			let calcOutputDamage = calcBaseDamage + offsetDamage;
			//Number of hits
			let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
			let attackValues = [calcOutputDamage, numberOfHits];
			return attackValues;
		};
		// Get player/enemy health to change later
		let getPlayerHealth = document.querySelector(".health-player");
		let getEnemyHealth = document.querySelector(".health-enemy");
		let getHeader = document.querySelector(".header");
		let getFooter = document.querySelector(".footer");
		// Initiate Attacks
		if (getPlayerSpeed >= getEnemySpeed) {
			let playerAttackValues = playerAttack();
			let totalDamage = playerAttackValues[0] * playerAttackValues[1];
			enemy.health = enemy.health - totalDamage;
			
			getHeader.innerHTML = '<p>You swayed the crowd for ' + totalDamage + ' votes!</p>';
			if (enemy.health <= 0) {
				getHeader.innerHTML = '<p>You are the new President of the United States of America! Click the "Retreat" button to return to the White House :)</p>';
				getHeader.style.backgroundColor = "#BB133E";
				getPlayerHealth.innerHTML = 'Votes: ' + player.health;
				getEnemyHealth.innerHTML = 'Votes: 0';
			} else {
				getEnemyHealth.innerHTML = 'Votes: ' + enemy.health;
				// Enemy attacks
				let enemyAttackValues = enemyAttack();
				let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
				player.health = player.health - totalDamage;
				getFooter.innerHTML = '<p>Enemy swayed the crowd for ' + totalDamage + ' votes!</p>';
				if (player.health <= 0) {
					getHeader.innerHTML = '<p>You lost the debate. Click the "Retreat" button to play again :)</p>';
					getHeader.style.backgroundColor = "#BB133E";
					getPlayerHealth.innerHTML = 'Votes: 0';
					getEnemyHealth.innerHTML = 'Votes: ' + enemy.health;
				} else {
					getPlayerHealth.innerHTML = 'Votes: ' + player.health;
				}
			}
        } else if (getEnemySpeed >= getPlayerSpeed) {
			let enemyAttackValues = enemyAttack();
			let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
			player.health = player.health - totalDamage;

			getFooter.innerHTML = '<p>Enemy swayed the crowd for ' + totalDamage + ' votes!</p>';
			if (player.health <= 0) {
				getHeader.innerHTML = '<p>You lost the debate. Click the "Retreat" button to play again :)</p>';
				getHeader.style.backgroundColor = "#BB133E";
				getEnemyHealth.innerHTML = 'Votes: ' + enemy.health;
				getPlayerHealth.innerHTML = 'Votes: 0';
			} else {
				getPlayerHealth.innerHTML = 'Votes: ' + player.health;
				// Player attacks
				let playerAttackValues = playerAttack();
				let totalDamage = playerAttackValues[0] * playerAttackValues[1];
				enemy.health = enemy.health - totalDamage;
				getHeader.innerHTML = '<p>You swayed the crowd for ' + totalDamage + ' votes!</p>';
				if (enemy.health <= 0) {
					getHeader.innerHTML = '<p>You are the new President of the United States of America! Click the "Retreat" button to return to the White House :)</p>';
					getHeader.style.backgroundColor = "#BB133E";
					getEnemyHealth.innerHTML = 'Votes: 0';
					getPlayerHealth.innerHTML = 'Votes: ' + player.health;
				} else {
					getEnemyHealth.innerHTML = 'Votes: ' + enemy.health;
				}
			}
			
		}
	}
};
