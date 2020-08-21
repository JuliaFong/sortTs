 //Interfaces 
 // sets up a contract between different classes
 //use when we have very different objects
 // loose coupling

// interface Sortable {
//     length: number
//     compare(leftIndex: number, rightIndex: number): boolean
//     swap(leftIndex:number, rightIndex: number): void
// }
export abstract class Sorter {
    //used to mark certain methods
    //as existing in the future
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;
    sort(): void {
        const { length } = this;
    
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.compare(j, j+1)) {
                        this.swap(j, j + 1)
                    }
                }     
            }
        }

} 

//Inheritance - Abstract classes
//sets up a contract between different classes
//use when we are trying to build upn a definition of an object
//strongly couples classes together