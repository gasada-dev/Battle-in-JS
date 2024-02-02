import {Game} from './Classes/Game.js';
import {Character} from './Classes/Character.js';
import {GenerateEnemy} from './Classes/GenerateEnemy.js';
import { Player } from './Classes/Player.js';

let wolf = new Character('wolf',2, 50, 1, 2);
let enemies = new GenerateEnemy(Character).generate(10);

let man = new Player('man', 10, 100, 5, 2);

let game = new Game(man, enemies);
game.start();


