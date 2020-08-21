"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedList_1 = require("./LinkedList");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -50, 20])
// numbersCollection.sort()
// // const sorter = new Sorter(numbersCollection)
// // sorter.sort()
// console.log(numbersCollection.data)
// const charactersCollection = new CharactersCollection("xzaWEULAsvbdfsygrdjfha")
// charactersCollection.sort()
// console.log(charactersCollection)
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter = new Sorter(linkedList)
// sorter.sort()
linkedList.sort();
linkedList.print();
