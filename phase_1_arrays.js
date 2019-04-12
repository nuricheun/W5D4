Array.prototype.uniq = function () {
    let uniq_arr = [];
    for (let i=0; i < this.length; i++) {
        if (!uniq_arr.includes(this[i])) {
            uniq_arr.push(this[i]);
        }
    }
    return uniq_arr;
}

Array.prototype.twoSum = function () {
    
    let pairs = [];
    let pairSum = -1;
    for(let i=0; i<this.length; i++){
        for(let j=i+1; j<this.length; j++){
            pairSum = this[i] + this[j];
            if (pairSum === 0){
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
}



Array.prototype.transpose = function () {
    // let myArray = Array(this.length).fill(Array.new);
    let myArray = [[],[],[]]
    console.log(this.length);
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            myArray[i].push(this[j][i]);
        }
    }
    return myArray;
}

let arr = [[1,1,1], [2,2,2],[3,3,3]];


console.log(arr.transpose());

