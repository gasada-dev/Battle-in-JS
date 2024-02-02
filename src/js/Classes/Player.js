import { Character } from './Character.js';
/**
 * Класс, представляющий игрока. Унаследован от класса Character.
 */
export class Player extends Character {
    /**
     * Создает экземпляр игрока.
     */
    constructor(name, damage, hp, armor, evasion) {
        super(name, damage, hp, armor, evasion); // Вызов конструктора класса Character
    }
}