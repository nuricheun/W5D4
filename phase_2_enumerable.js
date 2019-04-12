Array.prototype.myEach = function (callback) {

    for(let i =0; i<this.length; i++){
        callback(this[i]);
    }

}

// let arr = [1,2,3,4,5]
// arr.myEach(function(e){
//     console.log(e);
// })



Array.prototype.myMap = function (callback) {

    let mappedArr = [];
    for (let i = 0; i < this.length; i++) { 
        mappedArr.push(callback(this[i]));
    }
    return mappedArr;
}

// let arr = [1,2,3,4,5];
// let result = arr.myMap(function(e){
//     return e * 2;
// })

// console.log(result);


Array.prototype.myReduce = function (callback, acc=null) {

    if (acc === null) {
        acc = this[0];
        for (let i = 1; i < this.length; i++) {
            acc = callback(acc, this[i]);
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            acc = callback(acc, this[i]);
        }
    }
    return acc;
}

// let arr = [1,2,3,4,5];
// let result = arr.myReduce(function(acc, e){
//     return (acc * e);
// })

// console.log(result);


