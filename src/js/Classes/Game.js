export class Game {
    /**
     * Создает экземпляр игры.
     * @param {Character} player - Игрок.
     * @param {Array<Character>} enemies - Массив врагов.
     */
    constructor(player, enemies) {
        this.player = player;
        this.enemies = enemies;
    }

    
    start() {
        this.player.attack(this.enemies[0]);
        this.player.attack(this.enemies[0]);
        this.player.attack(this.enemies[0]);
        this.player.attack(this.enemies[0]);
        this.player.attack(this.enemies[0]);
        this.player.attack(this.enemies[0]);
    }
}