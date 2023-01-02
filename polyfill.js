//push
Array.prototype.myPush = function () {
    //First we will check the type of this
    if (this === null || this === undefined) {
        throw new TypeError('.push is not a function')
    }

    //Now if we know this is a type of 
    // object or array, we will find the length 
    let length = this.length || 0;
    let argsLength = arguments.length; // we have a special keyword in           functions i.e arguments which returns array of arguments passed in the function

    //Now if we don't have any arguments to push 
    //we have to change nothing, just we have to return the length
    if (!argsLength) {
        return length;
    }

    //looping till arguments array length is not finished
    for (let i = 0; i < argsLength; i++) {
        this[length + i] = arguments[i]; //this -> array or object // i + length because we are pushing item in array 
        //So if we have [1,2,3] then we have to start with index 3
    }

    this.length = length + argsLength; //adding the length to the arguments length
    return this.length;
}


let arr = [1, 2, 3]
arr.push(4)
console.log(arr)
console.log(arr.push(5))
console.log(arr)

arr.myPush(6)
console.log(arr)
console.log(arr.myPush(7))
console.log(arr)

//pop
Array.prototype.myPop = function () {
    //First we will check the type of this
    if (this === null || this === undefined) {
        throw new TypeError('.pop is not a function')
    }

    //Now if we know this is a type of 
    // object or array, we will find the length 
    let length = this.length || 0;

    if (!length) return undefined;

    let poppedElm = this[length - 1]; //Getting the last element from this
    delete this[length - 1]; //deleting the last element from this

    this.length = length - 1; //decreasing the size of this

    return poppedElm; //returning the popped element
}


arr.pop()
console.log(arr)
console.log(arr.pop())
console.log(arr)

arr.myPop()
console.log(arr)
console.log(arr.myPop())
console.log(arr)


//unshift
Array.prototype.myUnshift = function () {
    //First we will check the type of this
    if (this === null || this === undefined) {
        throw new TypeError('.unshift is not a function')
    }

    //Now if we know this is a type of 
    // object or array, we will find the length 
    let length = this.length || 0;
    let list = this;
    let argsLength = arguments.length; // we have a special keyword in      functions i.e arguments which returns array of arguments passed in the function

    //Now if we don't have any arguments to unshift
    //we have to change nothing, just we have to return the length
    if (!argsLength) {
        return length;
    }

    //Now we have to shift all the elements to add elements at start
    //for this we will start the loop from end and start shifting element 
    for (let i = length - 1; i >= 0; i--) {
        if (i in list) {
            this[i + argsLength] = this[i];
        }

        delete this[i]; //keep deleting the previous element
    }

    //After the above loop there will be empty spaces at start of array because all the items are now shifted to new indexes
    //This loop is for filling those indexes with new elements
    for (let i = argsLength - 1; i >= 0; i--) {
        this[i] = arguments[i];
    }

    this.length = length + argsLength;

    return this.length; //returning new length
}

arr.unshift(0)
console.log(arr)
arr.myUnshift(-1)
console.log(arr)

//shift
Array.prototype.myShift = function () {
    //First we will check the type of this
    if (this === null || this === undefined) {
        throw new TypeError('.unshift is not a function')
    }

    //Now if we know this is a type of 
    // object or array, we will find the length 
    let length = this.length || 0;

    if (!length) return undefined;

    let shiftedElm = this[0]; //Getting the first element from this
    delete this[0];//deleting the first element from this

    for (let i = 1; i < this.length; i++) {

        this[i - 1] = this[i];

        delete this[i]; //keep deleting the previous element
    }

    this.length = length - 1//decreasing the size of this

    return shiftedElm; //returning the shiftedElmF element
}

arr.shift()
console.log(arr)
arr.myShift()
console.log(arr)