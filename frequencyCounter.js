//==================brute force===================//
var countFre = function (n) {
    let visited = [];                                  //========
    for (let i = 0; i < n.length; i++) {//O(N)         //       |
        if (visited[i] == true) {                        //       |
            continue;                                      //       |=====>//O(N*K)
        }                                                //       |   
        let count = 1;                                   //       |
        for (let j = i + 1; j < n.length; j++) {//O(K)   //       |
            if (n[i] == n[j]) {                            //======
                visited[j] = true;
                count++;
            }
        }
        console.log(n[i] + " " + count);
    }
    console.log(visited);//[ <3 empty items>, true, true, true, true ]
    return ""
};

console.log(countFre([1, 3, 2, 1, 1, 2, 3]));

//==================optimize method===================//

function count(n) {
    let obj = new Map();
    for (let i = 0; i < n.length; i++) {//O(N)
        if (obj.has(n[i])) {
            obj.set(n[i], obj.get(n[i]) + 1);
            continue;
        }
        obj.set(n[i], 1);
    }
    console.log(obj); //Map(3) { 1 => 3, 3 => 2, 2 => 2 }
    console.log(obj.keys()); //[Map Iterator] { 1, 3, 2 }
    console.log([...obj.keys()]); //[ 1, 3, 2 ]
    console.log(obj.values()); //[Map Iterator] { 3, 2, 2 }
    console.log([...obj.values()]); //[ 3, 2, 2 ]
    return obj;
}

console.log(count([1, 3, 2, 1, 1, 2, 3]));



//=========================optimize method=============//

//same([1,2,3],[4,1,9])//true
//same([1,2,3],[1,9])//false
//same([1,2,1],[1,4,1])//true

function sameOrNot(arr1, arr2) {
    if (arr1.length === arr2.length) {
        arr1 = arr1.map(x => x ** 2)
        let map = new Map()
        for (let i = 0; i < arr2.length; i++) {
            if (map.has(arr2[i])) {
                map.set(arr2[i], map.get(arr2[i]) + 1)
            } else {
                map.set(arr2[i], 1)
            }
        }
        for (let field of arr1) {
            if (!map.has(field)) return false
            else {
                if (map.get(field) > 1) {
                    map.set(field, map.get(field) - 1)
                } else {
                    map.delete(field)
                }
            }
        }
        return true
    } else return false
}
console.log(sameOrNot([1, 2, 1], [4, 1, 9]))//false
console.log(sameOrNot([1, 2, 3], [4, 1, 9]))//true
console.log(sameOrNot([1, 2, 3], [1, 9]))//false



//===================findAnagrams(optimize method)================//

function findAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }
    let arr1 = new Array(26)
    let arr2 = new Array(26)
    for (let i = 0; i < 26; i++) {
        arr1[i] = 0
        arr2[i] = 0
    }
    for (let i = 0; i < str1.length; i++) {
        arr1[str1.charCodeAt(i) - 97]++
        arr2[str2.charCodeAt(i) - 97]++
    }
    if (arr1.join("") === arr2.join("")) {
        return true
    } else { return false }
}

console.log(findAnagrams("aca", "caa"))

//GroupAnagrams
function groupAnagrams(arr) {
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        let x = new Array(26).fill(0)
        for (let j = 0; j < arr[i].length; j++) {
            x[arr[i].charCodeAt(j) - 97]++
        }
        if (map.has(x.join(""))) {
            map.set(x.join(""), map.get(x.join("")).concat(arr[i]))
        }
        else { map.set(x.join(""), [arr[i]]) }
    }
    return [...map.values()].sort((a, b) => a.length - b.length)
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))//[ [ 'bat' ], [ 'tan', 'nat' ], [ 'eat', 'tea', 'ate' ] ]
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]))//[ [ 'bdddddddddd' ], [ 'bbbbbbbbbbc' ] ]


//Count Number of Distinct Integers After Reverse Operations
var countDistinctIntegers = function (nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        arr.push(parseInt(nums[i].toString().split("").reverse().join("")))
    }
    nums = nums.concat(arr)
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1)
            continue
        }
        map.set(nums[i], 1)
    }
    return [...map.keys()].length
};

console.log(countDistinctIntegers([1, 13, 10, 12, 31]))

//check pattren
function checkPattern(str1, str2) {
    if (str1.length == str2.length) {
        let map = new Map()
        for (let i = 0; i < str1.length; i++) {
            if (map.has(str1[i])) {
                if (map.get(str1[i]) != str2[i]) return false
            }
            else { map.set(str1[i], str2[i]) }
        }
        let map1 = new Map()
        for (let i = 0; i < str1.length; i++) {
            if (map1.has(str2[i])) {
                if (map1.get(str2[i]) != str1[i]) return false
            }
            else { map1.set(str2[i], str1[i]) }
        }
        return true
    } else {
        return false
    }
}

console.log(checkPattern('abb', 'pqq'))//true
console.log(checkPattern('abb', 'pqp'))//false
console.log(checkPattern('abb', 'ppp'))//false