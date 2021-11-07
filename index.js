// Return distinct values and their counts from a list including duplicates
// (i.e. "1 3 5 3 7 3 1 1 5" -> " 1(3) 3(3) 5(2) 7(1)")

const input = "1 3 5 3 7 3 1 1 5";
const arr = input.split(" ");
let output = '';


/** 
 * Method 1: 
 *  1). for loop inside of forEach block to get the count of each element in the array(arr)
 *  2). for loop outside of forEach block to get distinct element and format result
*/

// let temp = []
// arr.forEach((item) => {
//   let count = 0;
//   for(let i=0; i<arr.length; i++) {
//     if(item === arr[i]) {
//       count ++
//     }
//   }
//   temp.push([item,count])
// })
// for (const [v,c] of new Map(temp)) {
//   output += v+ '(' + c + ')' + ' '
// }


/** 
 * Method 2: 
 *  1). Set to create an array composed of the distinct elements based on original array
 *  2). forEach to get the count of element in new array, and format the result
 */

//  const temp = new Set(arr);

//  temp.forEach(item => {
//    let count = 0;
//    for(let i=0; i<arr.length; i++) {
//      if(item === arr[i]) {
//        count ++ 
//      }
//    }
//    output +=  item + '(' + count + ')' + ' '
//  })


/** 
 * Method 3: 
 *  1). use <foreach> to create an object composed of distinct key-value pairs, which is constructed​​
 *      based on The distinct elements in the original array are used as the keys of the object. 
 *      The corresponding value ​​of the key is that if there is no one in the object, the value is 1,
 *      otherwise the value accumulation of 1.  
 *  2). use <for in> format the result
*/

let temp = {}
arr.forEach(el => temp[el] = 1 + (temp[el] || 0))  

for(const key in temp){
  output = output.concat(`${key}(${temp[key]}) `)
}


console.log(output);
