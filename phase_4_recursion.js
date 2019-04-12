Array.prototype.range = function (start, end) {
    if (start == end) {
        return [this[end]];
    }

    return [this[start]].concat(this.range(start+1, end));
 }

// let arr = [1,2,3,4,5,6];

// console.log(arr.range(1,4));

const sumRec = function (arr) {
    if (arr.length == 1){
        return arr[0]
    }
    return arr[0] + sumRec(arr.slice(1, arr.length))
}

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(sumRec(arr));

const exponent = function(b, n){
    if (n==0){
        return 1
    }
    return b * exponent(b, n-1)
}

// console.log(exponent(5, 3))


const fibonacci_helper = function (n) {
    if (n == 1 || n == 2) {
        return 1;
    }
    return fibonacci_helper(n - 1) + fibonacci_helper(n - 2)
}

const fibonacci = function(n) {
    if (n == 1){
        return fibonacci_helper(n);
    }
    return ([fibonacci_helper(n)].concat(fibonacci(n-1))).reverse();
}

// console.log(fibonacci(5));


const deepDup = function(arr){
    let answer = [];
    for(let i=0; i<arr.length; i++){
        if (typeof(arr[i]) != 'array'){
            answer.push(arr[i]);
        }else{
            return answer.concat(deepDup(arr[i]));
        }
    }
    return answer
}


const bsearch = function(arr, target){

    if (arr.length<=1){
        if (arr[0] != target) {
            return null;
        } else {
            return 0;
        }
    }

    let mid = parseInt((arr.length)/2);
    if (arr[mid] === target){
        return mid
    }

    let left = arr.slice(0, mid)
    let right = arr.slice(mid+1, arr.length)
    if (arr[mid] > target){
        return bsearch(left, target)
    }else{
        // return (mid+1) + bsearch(right, target)
        let result = bsearch(right, target);
        if (result !== null){
            return (mid + 1) + result;
        }else {
            return null
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 8, 12, 16, 17, 18, 23, 26];
// console.log(bsearch(arr,26));
console.log(bsearch(arr, 7));

const mergeSort = function(arr) {

    if (arr.length == 1) {
        return arr;
    }

    let mid = parseInt(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);

    let left_sorted = mergeSort(left);
    let right_sorted = mergeSort(right);

    return merge(left_sorted, right_sorted);

}

const merge = function(left, right) {
    let merged = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            merged.push(left.shift());
        } else {
            merged.push(right.shift());
        }
    }

    return merged.concat(left).concat(right);
}

// let jumbled = [3, 5, 1, 2, 9, 8, 6, 16, 1];
// console.log(mergeSort(jumbled));

const subsets = function(arr) {
    
}
