import { Fruit, sellFruits, addStock, removeFruit, checkStock} from '../src/index';

describe('Fruit management functions', () => {
    let stock: { id: number, name: string, quantity: number }[];

    beforeEach(() => {
        stock = [
            { id: 1, name: "Apple", quantity: 10 },
            { id: 2, name: "Lemon", quantity: 5 },
            { id: 3, name: "Pineapple", quantity: 8 }
        ];
    });

    test('addStock should increase the quantity of an existing fruit', () => {
        const updatedStock = addStock(stock)('Apple')(5);
        expect(updatedStock.find(f => f.name === 'Apple')?.quantity).toBe(15);
    });

    test('addStock should add a new fruit if not present', () => {
        const updatedStock = addStock(stock)('Banana')(10);
        expect(updatedStock.find(f => f.name === 'Banana')?.quantity).toBe(10);
        expect(updatedStock.length).toBe(4); // A new fruit has been added
    });

    test('sellFruits should reduce the quantity of a fruit', () => {
        const updatedStock = sellFruits(stock)('Pineapple')(2);
        expect(updatedStock.find(f => f.name === 'Pineapple')?.quantity).toBe(6);
    });

    test('removeFruit should remove a fruit from stock', () => {
        const updatedStock = removeFruit(stock)('Pineapple');
        expect(updatedStock.find(f => f.name === 'Pineapple')).toBeUndefined();
    });

    test('checkStock should return a formatted string of the stock', () => {
        const stockMessage = checkStock(stock);
        const expectedMessage = `Stock :\n  Apple : 10\n  Lemon : 5\n  Pineapple : 8\n`;
        expect(stockMessage).toBe(expectedMessage);
    });
});
