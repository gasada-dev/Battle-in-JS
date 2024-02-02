export class Game {
    /**
     * Создает экземпляр игры.
     * @param {Character} player - Игрок.
     * @param {Array<Character>} enemies - Массив врагов.
     */
    constructor(player, enemies) {
        this.player = player;
        this.enemies = enemies;
        this.isRunning = "running";
    }


    start() {
        this.player.attack(this.enemies[0]);

        while (this.isRunning === "running") {



        };
    }
        
    battle() {

        
        this.player.attack(this.enemies[0]);
        
        this.enemies[0].attack(this.player);
        
    }

        // switch (this.isRunning) {
        //     case "stop":
        //         break;
        //     case "pause":
        //         break;
        //     default:
        //         break;
        // }


    stopGame() {
        this.isRunning = "stop";
    }

    pauseGame() {
        this.isRunning = "pause";
    }
}