import './css/style.css'
import {Game} from './src/js/classes/Game.js';
import {Character} from './src/js/classes/Character.js';
import {GenerateEnemy} from './src/js/classes/GenerateEnemy.js';
import {Player} from './src/js/classes/Player.js';

let enemies = new GenerateEnemy(Character).generate(10);

let hero = new Player('hero', 10, 100, 5, 2);

let game = new Game(hero, enemies);
game.start();


