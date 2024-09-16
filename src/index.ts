interface Fruit {
    id: number;
    name: string;
    quantity: number;
}

const sellFruits = (stock: Fruit[]) => (fruit: string) => (quantity: number) => {
    return stock.map((f) => {
        if (f.name === fruit) {
            f.quantity -= quantity;
        }
        return f;
    });
}

const addStock = (stock: Fruit[]) => (fruit: string) => (quantity: number) => {
    const existingProduct = stock.find((p) => p.name === fruit);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        stock.push({ id: stock.length + 1, name: fruit, quantity });
    }
    return stock;
}
const addFruit = addStock;

const removeFruit = (stock: Fruit[]) => (fruit: string) => {
    return stock.filter((f) => f.name !== fruit);
}

const checkStock = (stock: Fruit[]) => {
    stock.forEach((fruit) => {
        console.log(`Fruit : ${fruit.name} | Quantity : ${fruit.quantity}`);
    });
}

function main() {
    console.log("code nul\n")
    let stock = [
        { id: 1, name: "Apple", quantity: 10 },
        { id: 2, name: "Lemon", quantity: 5 },
        { id: 3, name: "Pineapple", quantity: 8 }
    ];

    console.log('addStock');
    stock = addStock(stock)('Apple')(5);

    console.log('addFruit');
    stock = addFruit(stock)('Lemon')(10);

    console.log('sellFruits');
    stock = sellFruits(stock)('Pineapple')(2);

    console.log('checkStock');
    checkStock(stock);

    console.log('removeFruit');
    stock = removeFruit(stock)('Pineapple');

    console.log('checkStock');
    checkStock(stock);
}

main();
