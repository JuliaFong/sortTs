"use strict";
//Interfaces 
// sets up a contract between different classes
//use when we have very different objects
// loose coupling
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// interface Sortable {
//     length: number
//     compare(leftIndex: number, rightIndex: number): boolean
//     swap(leftIndex:number, rightIndex: number): void
// }
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
//Inheritance - Abstract classes
//sets up a contract between different classes
//use when we are trying to build upn a definition of an object
//strongly couples classes together
