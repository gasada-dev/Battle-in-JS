import { getRandomInt } from '../ultils.js';

export class GenerateEnemy {
    /**
     * Создает экземпляр GenerateEnemy.
     * @param {Class} enemyClass - Класс, представляющий тип врага.
     */
    constructor(enemyClass) {
        this.generatedEnemy = [];
        this.names = [
            'Goblin', 'Orc', 'Skeleton', 'Troll', 'Witch', 'Dragon', 'Zombie', 'Vampire', 'Werewolf', 'Ghost',
            'Demon', 'Specter', 'Minotaur', 'Cyclops', 'Banshee', 'Hydra', 'Harpy', 'Yeti', 'Imp', 'Lich',
            'Manticore', 'Necromancer', 'Siren', 'Chimera', 'Kraken', 'Wendigo', 'Medusa', 'Gorgon', 'Griffin', 'Basilisk'
        ];
        this.enemyAdjectives = [
            'Bloody', 'Dark', 'Evil', 'Fierce', 'Grim', 'Hateful', 'Infamous', 'Jagged', 'Keen', 'Lurking',
            'Mighty', 'Nasty', 'Ominous', 'Pitiless', 'Ruthless', 'Savage', 'Threatening', 'Vicious', 'Wicked', 'Xenophobic',
            'Yielding', 'Zealous'
        ];
        this.enemyClass = enemyClass
    }
        /**
         * Генерирует указанное количество экземпляров врагов.
         * @param {number} countEnemy - Количество генерируемых врагов.
         * @returns {Array} - Массив сгенерированных экземпляров врагов.
         */
    generate(countEnemy) {
        for (let i = 0; i < countEnemy; i++) {
            let enemyName = this.enemyAdjectives[getRandomInt(this.enemyAdjectives.length)] + ' ' + this.names[getRandomInt(this.names.length)];

            this.generatedEnemy.push(new this.enemyClass(
                enemyName,
                getRandomInt(25, 1),
                getRandomInt(50, 5),
                getRandomInt(5),
                getRandomInt(5)
            ))
        }
        return this.generatedEnemy;
    }
}