
let GameManager = {
setGameStart: function (name) {
    this.resetPlayer(name);
    this.setPreFight();
},
resetPlayer: function(name) {
    switch (name) {
        case "Joey":
            player = new Player(name, 200, 0, 200, 100, 50);
        break;
        case "Wolfson":
            player = new Player(name, 200, 0, 200, 100, 50);
        break;
        case "Manzella":
            player = new Player(name, 200, 0, 200, 100, 50);
        break;
        case "Patterson":
            player = new Player(name, 200, 0, 200, 100, 50);
        break;
    }
    let getInterface = document.querySelector(".interface");
    getInterface.innerHTML = '<img src="img/avatar-player/' + name.toLowerCase() + '.png" class="img-avatar"><div><h3>' + name + '</h3><p class="health-player">Votes: ' + player.health + '<h1>Vote for <span class="red">' + player.name + '</span>!</h1>';
    getInterface.style.display = "flex";
    getInterface.style.flexWrap = "wrap";
    getInterface.style.textAlign = "center";
},
setPreFight: function() {
    let getHeader = document.querySelector(".header");
    let getActions = document.querySelector(".actions");
    let getFooter = document.querySelector(".footer");
    let getActions2 = document.querySelector(".actions2");


    getHeader.innerHTML = '<p>Task: Debate Your Opponent!</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick = "GameManager.setFight()">Debate!</a>';
    getFooter.style.visibility = "visible";
    getFooter.innerHTML = '<p>Task: Debate Your Opponent!'
    getActions2.innerHTML = '<a href="index.html" class="btn-prefight">Retreat!</a>';
},
setFight: function() {
    let getHeader = document.querySelector(".header");
    let getFooter = document.querySelector(".footer");
    let getActions = document.querySelector(".actions");
    let getEnemy = document.querySelector(".enemy");
    let getActions2 = document.querySelector(".actions2");
    
    //Create Enemy
    let enemy0 = new Enemy("Trump", 400, 0, 150, 100, 100);
    let enemy1 = new Enemy("Hillary", 400, 0, 100, 100, 150);
    let enemy2 = new Enemy("Bernie", 500, 0, 200, 100, 100);
    let enemy3 = new Enemy("Biden", 300, 0, 100, 100, 150);
    let enemy4 = new Enemy("Warren", 300, 0, 100, 100, 150);
    let enemy5 = new Enemy("Beto", 300, 0, 100, 100, 150);

    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(6));
    switch (chooseRandomEnemy) {
        case 0:
        enemy = enemy0;
        break;
        case 1:
        enemy = enemy1;
        break;
        case 2:
        enemy = enemy2;
        break;
        case 3:
        enemy = enemy3;
        break;
        case 4:
        enemy = enemy4;
        break;
        case 5:
        enemy = enemy5;
        break;
    }
    getHeader.innerHTML = '<p>Do you have what it takes?</p>';
    getFooter.innerHTML = '<p>Do you have what it takes?</p>';
    getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Debate!</a>';
    getEnemy.innerHTML = '<img src="img/avatar-enemy/' + enemy.name.toLowerCase() + '.png" alt="' + enemy.name + '"class="img-avatar"><div><h3>' + enemy.name + '</h3><p class="health-enemy">Health: ' + enemy.health + '<h1>Vote for <span class="red">' + enemy.name + '</span>!</h1>';
    getActions2.innerHTML = '<a href="index.html" class="btn-prefight">Retreat!</a>';
} 
}