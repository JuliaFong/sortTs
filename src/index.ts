import { Sorter} from './sorter';
// import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection'

// const numbersCollection = new NumbersCollection([10, 3, -5, 0, -50, 20])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(sorter.collection)

const charactersCollection = new CharactersCollection("xzaWEULAsvbdfsygrdjfha")
const sorter = new Sorter(charactersCollection)
sorter.sort()
console.log(charactersCollection.data)