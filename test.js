const { lowerFirst } = require("lodash");

// 反转两个数
var reverse = function(x) {
    if(x === 0)  return '';
    let lessZero = false;
    if(x < 0){
        x = x * -1;
        lessZero = true;
    }
    const arr = `${x}`.split('');
    let firstZero = true;
    let str = '';
    while(arr.length){
        let num = arr.pop();
        if(+num === 0 && firstZero){
            continue;
        }else{
            firstZero = false;
            str += num;
        }
    }
    let  outputNum = +str;
    if(outputNum > Math.pow(2,31) - 1) return 0;
    if(lessZero) outputNum = str * -1;
    return outputNum;
};

// 回文数
var isPalindrome = function(x) {
    if(x < 0) return false;
    if(x === 0 ) return true;
    let str = '';
    let arr = `${x}`.split('');
    while(arr.length){
        let num = arr.pop();
        str += num;
    }
    if(str == x) return true;
    return false;
};

// 罗马数字转整数
var romanToInt = function(s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let regsArr = [
        {reg:/IV/,val:4}, 
        {reg:/IX/,val:9}, 
        {reg:/XL/,val:40},
        {reg:/XC/,val:90},
        {reg:/CD/,val:400},
        {reg:/CM/,val:900}
    ];
    let array = s.split('');
    let index = 0;
    let num = 0;
    while(index < array.length){
        const current = array[index];
        let nextStr = current + array[index+1];
        let result = regsArr.find(reg => reg.reg.test(nextStr));
        if(result){
            index  += 2;
            num += result.val;
        }else{
            index += 1;
            num += obj[`${current}`]
        }
    }
    return num;
};


// 最长公共前缀
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0 || !strs[0]) return "";
    let firstStrArr = strs[0].split('');
    let index = 0;
    let preStr = '';
    while (index < firstStrArr.length) {
        let val = preStr + firstStrArr[index];
        let flag = strs.every(str => str.startsWith(val));
        if(flag){
            preStr = val;
            index++;
        }else{
            break;
        }
    }
    return preStr;
};

//非法括号（）{[]()} "()[]{}" ---没做出来
// var isValid = function(s) {
//     if(s === '') return true;
//     let obj = {
//         '{' : '}',
//         '[' : ']',
//         '(' : ')'
//     }
//     let getIndexArr = (array,val) => {
//         let indexArr = [];
//         for (let index = 0; index < array.length; index++) {
//             const element = array[index];
//             if(element === val){
//                 indexArr.push(index);
//             }
//         }
//         return indexArr;
//     }
//     let originArr = s.split('');
//     let len = originArr.length;
//     let flag = true;
//     if(len > 0 && len % 2 === 0){
//         let index = 0;
//         let newArr = [];
//         function next(arr){
//             let firstOne = arr[index];
//             let indexArr = getIndexArr(arr, obj[`${firstOne}`]);
//             if(indexArr.length === 0) {
//                 flag = false;
//                 return;
//             };
//             let nextIndex = indexArr.pop();
//             newArr = [...arr.slice(index + 1,nextIndex),...arr.slice(nextIndex+1)];
//             console.log(newArr,'newArr');
//             if(newArr.length  % 2 === 0) {
//                 if(newArr.length === 0 ) return;
//                 next(newArr)
//             }else{
//                 flag = false;
//                 return;
//             }
//         }
//         next(originArr)
//     }else{
//         flag =  false;
//     }
//     return flag;
// };
// "(([]){})"


function isValid(s){

    let stack= [];
    let top;

    for(let char of s){
        let value;
        if((value = map[char])){
            stack.push(value);
        }else{
            console.log(stack);
            top = stack.pop();
            if(top !== char){
                return false;
            }
        }
    }
    return !stack.length;
}

console.log(isValid("{[]()}"));