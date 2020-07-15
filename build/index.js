"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -50, 20])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(sorter.collection)
var charactersCollection = new CharactersCollection_1.CharactersCollection("xzaWEULAsvbdfsygrdjfha");
var sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
