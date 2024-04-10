/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    const result = [];
    const queue = deck.map((_, i) => i);
    deck.forEach((card) => {
        const idx = queue.shift();
        result[idx] = card;
        if(queue.length > 0) {
            queue.push(queue.shift());
        }
    });
    return result;
};
