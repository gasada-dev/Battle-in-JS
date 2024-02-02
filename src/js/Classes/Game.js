import {getRandomInt} from '../ultils.js';

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

        // while (this.isRunning === "running") {
        // };
    }
        
    battle() {
        
        
        
                
    }

    escape() {

        if (getRandomInt(6) > 4){

            console.log(`${this.player.name} Успешно сбежал`);

        } else{
            console.log(`${this.player.name} не смог сбежать и получил удар`)
            this.enemies[0].attack(this.player);
        }

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