import { Sorter} from './sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -50, 20])
const sorter = new Sorter(numbersCollection)
sorter.sort()
console.log(sorter.collection)