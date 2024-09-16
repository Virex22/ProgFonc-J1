// Dans le reste du programme on utilise le nom et pas l'id
// Dans le programme on utilise également le console.log pour afficher les fruits et leur quantité 
//   partout et on ne devrait pas
let fruitsStock = [
    { id: 1, name: "Pomme", quantity: 10 },
    { id: 2, name: "Poire", quantity: 5 },
    { id: 3, name: "Ananas", quantity: 8 }
  ];
  
  //double paramètre dans une fonction et on utilise le stock à l'intérieur sans le passer en paramètre donc, c'est non pure
   // on ne retourne rien
   function addFruitToStock(name: string, quantity: number) {
    const existingProduct = fruitsStock.find((p) => p.name === name);
  
    if (existingProduct) {
        // on modifie existingProduct, on ne devrait pas
      existingProduct.quantity += quantity;
    } else {
        // on push directement dans fruitsStock, on ne devrait pas
      fruitsStock.push({ id: fruitsStock.length + 1, name, quantity });
    }
  }
  
  //non pure car on utilise fruitsStock qui est une variable extérieur
   // on ne retourne rien
  function deleteFruit(name: string) {
    // on modifie fruitsStock, on ne devrait pas
    fruitsStock = fruitsStock.filter((p) => p.name !== name);
    console.log(`${name} deleted from stock`);
  }
  
  //non pure car on utilise fruitsStock qui est une variable extérieur
  // on ne retourne rien
  function showStock() {
    fruitsStock.forEach((fruit) => {
      console.log(`Fruit : ${fruit.name} | Quantity : ${fruit.quantity}`);
    });
  }
  
  //double paramètre dans une fonction et on utilise le stock à l'intérieur sans le passer en paramètre donc, c'est non pure
  // on ne retourne rien, on devrait retourner le stock
  function sellFruit(name: string, quantity: number) {
    // utiliser 2x de suite, on aurait pu le mettre dans une fonction pour éviter la redondance
    const fruit = fruitsStock.find((p) => p.name === name);
  
    if (fruit && fruit.quantity >= quantity) {
        // on modifie fruit, on ne devrait pas
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