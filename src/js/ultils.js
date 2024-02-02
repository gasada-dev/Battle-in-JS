/**
 * Генерирует случайное целое число в заданном диапазоне.
 * @param {number} max - Максимальное значение (включительно).
 * @param {number} [min=0] - Минимальное значение (по умолчанию 0).
 * @returns {number} - Случайное целое число в заданном диапазоне.
 */
export function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}