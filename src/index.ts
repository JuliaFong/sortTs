class Sorter {
    constructor(public collection: number[] | string |LinkedList) {}

    sort(): void {
        const { length }= this.collection;
        // This only works if collection is numbers[]
        // If collection is an array of numbers
        // Use a type guard to restore access to a specific type 
        // in a union operator

        if (this.collection instanceof Array){
            for (let i = 0; i < length; i++) {
                for (let j = 0; j < length - i - 1; j++) {
                    if (this.collection instanceof LinkedList) { 
                    }
                
                    // Collection === number []
                    if(this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j]
                        this.collection[j] = this.collection[j+1]
                        this.collection[j+1] = leftHand
                    }

        }

                // Only works if collection is a string
                //If collection is a string, do this logic instead:
                // ~~logic to compare and swap characters in a stringg
                if (typeof this.collection === "string") {
                    
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0])
sorter.sort()
console.log(sorter.collection)