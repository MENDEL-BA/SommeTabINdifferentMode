/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var sumArray = function(nums) {

     // Sum whith reducer
    //const reducer = (accumulator, currentElement) => accumulator + currentElement;

    //console.log(nums.reduce(reducer));

    var sum = 0;

    for(var i=0; i< nums.length; i++) {
        sum += nums[i];
    }

    console.log("la somme ", sum)

};

var sumArrayOfNumberPair = function(nums) {

  var sum = 0;

    for(var i=0; i< nums.length; i++) {
      if(nums[i] % 2 === 0) {
          sum += nums[i];
      }
       
    }

    console.log("la somme des nombres pairs ", sum)

};

var sumArrayOfForLastElementPair = function(nums) {

  var newArray = [];


  for(var i = 0; i< nums.length; i++) {
    if(nums[i] % 2 === 0){
      newArray.push(nums[i]);
    }
  }
  // Sum whith reducer
  const reducer = (accumulator, currentElement) => accumulator + currentElement;
  console.log("les nombres pairs ", newArray)

 console.log( newArray.slice(Math.max(newArray.length - 4,0)).reduce(reducer));
 

};


var sumArrayOfForBigLastElementPair = function(nums) {

  var newArray = [];


  for(var i = 0; i< nums.length; i++) {
    if(nums[i] % 2 === 0){
      newArray.push(nums[i]);
    }
  }
  // Sum whith reducer
  const reducer = (accumulator, currentElement) => accumulator + currentElement;
  console.log("les nombres pairs ", newArray)

 console.log( newArray.sort((a,b) => a-b).slice(Math.max(newArray.length - 4,0)).reduce(reducer));
 

};

sumArrayOfForBigLastElementPair([1,14,2,23, 8,4,7,9,6,12])