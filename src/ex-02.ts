/*Observez le programme fourni.
● Identifiez les qualités et défauts de ce programme, avec un regard orienté
fonctionnel.
● Insérez des commentaires dans le code avec vos observations et éventuelles
suggestions d'amélioration.*/


let fruitsStock = [
    { id: 1, name: "Pomme", quantity: 10 },
    { id: 2, name: "Poire", quantity: 5 },
    { id: 3, name: "Ananas", quantity: 8 }
  ];
  
  //double paramètre dans une fonction et on utilise le stock à l'interieur sans le passer en paramètre donc, c'est non pure
  function addFruitToStock(name: string, quantity: number) {
    const existingProduct = fruitsStock.find((p) => p.name === name);
  
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      fruitsStock.push({ id: fruitsStock.length + 1, name, quantity });
    }
  }
  
  //non pure car on utilise fruitsStock qui est une variable extérieur
  function deleteFruit(name: string) {
    fruitsStock = fruitsStock.filter((p) => p.name !== name);
    console.log(`${name} deleted from stock`);
  }
  
  //non pure car on utilise fruitsStock qui est une variable extérieur
  function showStock() {
    fruitsStock.forEach((fruit) => {
      console.log(`Fruit : ${fruit.name} | Quantity : ${fruit.quantity}`);
    });
  }
  
  //double paramètre dans une fonction et on utilise le stock à l'interieur sans le passer en paramètre donc, c'est non pure
  function sellFruit(name: string, quantity: number) {
    // utiliser 2x de suite, on aurait pu le mettre dans une fonction pour éviter la redondance
    const fruit = fruitsStock.find((p) => p.name === name);
  
    if (fruit && fruit.quantity >= quantity) {
      fruit.quantity -= quantity;
      console.log(`${quantity} ${name} sold`);
    } else {
      console.log(`Not enough ${name} or unknown fruit`);
    }
  }
  
  addFruitToStock("Pomme", 5);
  addFruitToStock("Citron", 10);
  sellFruit("Ananas", 2);
  showStock();
  deleteFruit("Ananas");
  showStock();