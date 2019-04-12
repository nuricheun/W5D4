Array.prototype.bubbleSort = function () {
    let sorted = false;
    let temp;
    while (!sorted) {
        sorted = true;
        for(let i=0; i<this.length-1; i++){
            if (this[i] > this[i+1]){
                temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                sorted = false;
            }
        }
    }
    return this
}



String.prototype.substrings = function () {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i; j < this.length; j++) {
            arr.push(this.slice(i, j+1));
        }
    }
    return arr;
}

let name = "apple";
console.log(name.substrings());

