/*

Find the odd Integer

Given an array, find the integer that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

The return datatype of the findOdd function should be an integer

example: findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) -> 5
findOdd([1,1,1,1,1,1,10,1,1,1,1]) -> 10
findOdd([10]) -> 10
*/


function findOdd(arr) {
  let myObj ={};
  //forEach is an array function
  arr.forEach(el =>{
    if(!myObj [el]) myObj [el]=1;
    else myObj[el]++
  })
  /*console.log(myObj)
  //This will display an object providing a list of occurence of keys*/

  for (var key in myObj) {
    // console.log (key)
    // displays every item in the obj

    // console.log (myObj[key])
    //displayes each valuse in the array

    for (var key in myObj){
      if (myObj [key] %2 ===1) return  + key
    }
  }
};
//+ key line 35/36 is changing the key from a string into a number
// Key value pairs with conditional logic
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5,21,21,10,10]) // -> 5




// findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]) // -1



// render() {
//   return (
//     findOdd([4]);
//     // <div>
//     //   <h1>List of todos</h1>
//     //   console.log(this.props.todos)
//     // </div>
//   );
// }
