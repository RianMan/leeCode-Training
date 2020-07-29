const { lowerFirst, min } = require("lodash");

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

// console.log(isValid("{[]()}"));

//删除排序数组中的重复项（没做出来）
/**
 * 
 * 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */
var removeDuplicates = function(nums) {
    let index = 0;
    while ( index < nums.length) {
      let curNum = nums[index];
      let nextNum = nums[index+1];
      if(curNum === nextNum){
        nums.splice(index+1,1);
      }else{
        index++;
      }
    }
    return nums;
};

/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

 * @param {*} nums 
 * @param {*} val 
 */
var removeElement = function(nums, val) {
    let index = 0;
    while(index < nums.length){
        let element = nums[index];
        if(element === val){
            nums.splice(index,1);
        }else{
            index++;
        }
    }
    return nums;
};

// 查找字符串在另一个字符串中的索引位置
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    let index;
    haystack.replace(new RegExp(needle),(a,b)=>{
        index = b;
    })
    if(index === undefined) return -1
    return index;
};

//给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    let findIndex = 0;
    let len =  nums.length;
    while(index < len){
        let ele = nums[index];
        if(index === 0 && target < ele){
            findIndex = 0;
            break;
        }
        if(ele === target){
            findIndex = index;
            break;
        }else if(target > ele && target < nums[index + 1]){
            findIndex = index + 1;
            break;
        }else{
            index++;
            if(index === len) {
                findIndex = index;
                break;
            }
        }
        
    }
    return findIndex;
};

//给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和（没做出来）。
var maxSubArray = function(nums) {
};

var maxSubArray = function(nums) {
    if (!nums.length) {
        return;
    };
    // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
    let max_ending_here = nums[0];
    let max_so_far = nums[0];

    for (let i = 1; i < nums.length; i ++ ) {
        // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,
        max_ending_here = max_ending_here > 0 ? max_ending_here + nums[i] : nums[i];
        max_so_far = Math.max ( max_so_far, max_ending_here);
    };

    return max_so_far;
};

// console.log(maxSubArray([3, -3, -1, 2 ]));

var lengthOfLastWord = function(s) {
    let arr = s.split(' ').filter(k => k.length);
    console.log(arr);
    let text = arr.pop();
    return text ? text.length : 0;
};

/**66. 加一
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 */
var plusOne = function(digits) {
    let len = digits.length;
    let newArr = [];

    function getArr(len){
        let arr = [];
        for (let index = 0; index < len; index++) {
            arr.push(0)
        }
        return arr;
    }

    function next(index){
        if(index === 0 && (digits[index] + 1)  % 10 === 0) {
            digits[index] = [1,0];
            return;
        };
        let lastOne = digits[index];
        if((lastOne + 1) % 10 === 0){
            let nums = (lastOne + 1) / 10;
            digits[index] = [...getArr(nums)];
            index -= 1;
            next(index)
        }else{
            digits[index] = lastOne + 1;
            return;
        }
    }

    next(len - 1)

    function flatten(array){
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if(Array.isArray(element)){
                flatten(element)
            }else{
                newArr.push(element)
            }
        }
    }

    flatten(digits);
    
    return newArr;
};

/**67. 二进制求和 (没做出来)
 * 给你两个二进制字符串，返回它们的和（用二进制表示）。
输入为 非空 字符串且只包含数字 1 和 0。
 * @param {*} a 
 * @param {*} b 
 */
var addBinary = function(a, b) {
  
};
// [1,1] [1]

//69. x 的平方根,(在一个数组找一个target的问题，都用二分法去做)
const mySqrt = function(x) {
    if (x < 2) return x
    let left = 1, mid, right = Math.floor(x / 2);
    while (left <= right) {
       mid = Math.floor(left + (right - left) / 2)
       if (mid * mid === x) return mid
       if (mid * mid < x) {
           left = mid + 1
       }else {
           right = mid - 1
       }
    }
    return right
}

// 70. 爬楼梯
var climbStairs = function(n) {
    if(n ===1) return 1;
    if(n === 2) return 2;
    return climbStairs(n-1) + climbStairs(n-2)
};

//350. 两个数组的交集 II
// nums1 = [1,2,2,1], nums2 = [2,2]
var intersect = function(nums1, nums2) {

};

//121. 买卖股票的最佳时机I（没做出来）
// [7,1,5,3,6,4]
var maxProfit = function(prices) {
    let min = prices[0], max = 0;
    prices.forEach(p => {
        if(p < min) min = p;
        if(max < p - min) max = p - min;
    })
    return max
};

// 122. 买卖股票的最佳时机 II
// 计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    prices.push(0);
    let len = prices.length;
    let arr = [];
    let index = 0;
    let min = prices[index];
    let lastIndexCache = 0;
    while (index < len) {
        let cur = prices[index];
        console.log(cur, prices[lastIndexCache] );
        if(lastIndexCache !== 0 && prices[lastIndexCache] > cur){
            arr.push(prices[lastIndexCache] - min);
            min = cur;
        }
        if(min > prices[index]){
            min = prices[index]
        }
        lastIndexCache = index;
        index++;
    }
    if(arr.length === 0){
        prices.pop();
        return prices[len - 1] - prices[0] > 0 ? prices[len - 1]  - prices[0] : 0;
    }
    return arr.reduce((pre,cur) => pre + cur,0);
};


var maxProfit = function(prices) {
    let profit_out = 0;
    let profit_in = -prices[0];
    let len = prices.length;
    for (let i = 1; i < len; i++){
        //卖出时利润：求最大值（上次交易卖出时利润，本次交易卖出时利润）
        profit_out = Math.max(profit_out, profit_in + prices[i]);
        //买入时利润：求最大值（上次买入时利润，本次买入时利润）
        profit_in = Math.max(profit_in,  - prices[i]);
    }
    return profit_out
};

/**
 * 第一个是天数
 * 第二个是允许交易的最大次数
 * 第三个是当前的持有状态（即之前说的 rest 的状态，我们不妨用 1 表示持有，0 表示没有持有）
 * 
dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1] + prices[i])
              max(   选择 rest  ,             选择 sell      )

解释：今天我没有持有股票，有两种可能：
要么是我昨天就没有持有，然后今天选择 rest，所以我今天还是没有持有；
要么是我昨天持有股票，但是今天我 sell 了，所以我今天没有持有股票了。

dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0] - prices[i])
              max(   选择 rest  ,           选择 buy         )


 */
// [1,2,3,4,5]
//[6,1,3,2,4,7]
console.log(maxProfit([6,1,3,2,4,7]));
// [7,1,5,3,6,4]