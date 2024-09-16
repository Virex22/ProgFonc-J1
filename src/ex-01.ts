const stock = new Map<string, number>();

stock.set('Apple', 10);
stock.set('Pear', 5);
stock.set('Pineapple', 8);

const sellFruits = (fruit: string) => (quantity: number) => {
    console.log('sellFruits');
    stock.set(fruit, (stock.get(fruit) ?? 0) - quantity);
}

const addStock = (fruit: string) => (quantity: number) => {
    console.log('addStock');
    stock.set(fruit, (stock.get(fruit) ?? 0) + quantity);
}
const addFruit = addStock;

const removeFruit = (fruit: string) => (quantity: number) => {
    console.log('removeFruit');
    stock.delete(fruit);
}

function checkStock() {
    console.log('checkStock');
    console.log(stock);
}

function main() {

    addFruit('Apple')(5);
    
    addFruit('Lemon')(8);

    sellFruits('Pineapple')(2);

    checkStock();

    removeFruit('Pineapple');

    checkStock();
}

main();
