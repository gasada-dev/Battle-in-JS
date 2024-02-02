import {getRandomInt} from '../ultils.js';


/**
 * Создает экземпляр персонажа.
 * @param {string} name - Имя персонажа.
 * @param {number} damage - Урон, наносимый персонажем.
 * @param {number} hp - Здоровье персонажа.
 * @param {number} armor - Броня персонажа.
 * @param {number} evasion - Шанс уклонения персонажа.
 */
export class Character {
    constructor(name, damage, hp, armor, evasion) {
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.armor = armor;
        this.evasion = evasion;
        this.isDead = false;
    }

    /**
     * Атакует указанного врага.
     * @param {Character} enemy - Цель атаки.
     */
    attack(enemy) {
        if (enemy.isDead) {
            console.log('Зачем ты бьешь труп?');
            return;
        }
        if (this.checkMiss(enemy.evasion, enemy.name) === true){
            return;
        }
        let lossHp = this.damage - enemy.armor;
        lossHp = lossHp > 0 ? lossHp : 0;
        console.log(`${this.name} Нанёс ${lossHp} урона ${enemy.name}`);
        enemy.takingDamage(lossHp)
        if (enemy.hp <= 0) enemy.isDead = true;
    };

    /**
     * Наносит персонажу урон.
     * @param {number} damageAmount - Количество урона.
     */
    takingDamage(damageAmount) {
        this.hp -= damageAmount
        console.log(`${this.name} потерял ${damageAmount} хп`);
        console.log(`У ${this.name} осталось ${this.hp} хп`);
    };

    /**
     * Проверяет попадание врага.
     * @param {number} enemyEvasion - Шанс уклонения врага.
     * @param {string} enemyName - Имя врага.
     * @returns {boolean} - Возвращает true, если атака промахнулась.
     */
     checkMiss(enemyEvasion, enemyName){
         if (getRandomInt(6) < enemyEvasion){
            console.log(`${this.name} промахнулся по ${enemyName}`);
            return true;
         }
     } 
}

