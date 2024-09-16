/*Limitez-vous à l'exécution du scénario suivant pour vérifier le fonctionnement de votre
programme :
1. Constitution d'un stock contenant 3 types de fruit :
a. Pomme (10),
b. Poire (5),
c. Ananas (8),
2. Ajout de 5 pommes,
3. Ajout de 8 poires,
4. Vente de 2 ananas,
5. Affichage du stock,
6. Suppression de l'ananas dans le stock,
7. Affichage du stock*/
// index.ts


const stock = new Map<string, number>();

stock.set('Apple', 10);
stock.set('Pear', 5);
stock.set('Pineapple', 8);

function sellFruits(fruit: string, quantity: number) {
    console.log('sellFruits');
    stock.set(fruit, (stock.get(fruit) ?? 0) - quantity);
}

function addFruit(fruit: string, quantity: number) {
    console.log('addFruit');
    stock.set(fruit, (stock.get(fruit) ?? 0) + quantity);
}

function addStock(fruit: string, quantity: number) {
    console.log('addStock');
    stock.set(fruit, (stock.get(fruit) ?? 0) + quantity);
}

function removeFruit(fruit: string) {
    console.log('removeFruit');
    stock.delete(fruit);
}

function checkStock() {
    console.log('checkStock');
    console.log(stock);
}

function main() {

    addFruit('Apple', 5);
    addFruit('Pear', 8);

    sellFruits('Pineapple', 2);

    checkStock();

    removeFruit('Pineapple');

    checkStock();
}

main();
