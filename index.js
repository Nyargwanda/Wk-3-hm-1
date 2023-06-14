function isCharAVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' ||char=== 'o' || char === 'u'){
      return 'This is a vowel';
    }
    else{
      return 'This is not a vowel.'
    }
    }
    console.log(isCharAVowel('a'));
    
    // 5.multiplyArray function
function multiplyArray(numbers) {
    if(numbers.length === 0) {
      return 0;
    }
    let product = 1;
    for(let i = 0; i < numbers.length; i++) {
      product *= numbers[i]
    } 
  return product;
  }
  const result = multiplyArray([2, 4, 5]);
  console.log(result);
  
  //6.  numArgs Function
  const numArgs = function() {return arguments.length;
  };
  console.log(numArgs(1, 2, 3));
  
  //6. Reverse
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(reverseString('Rockstar'));
  
  //longestStringinArray
  const longestStringInArray = function(arr) {
    let maxLength = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
        maxLength = arr[i].length;
      }
    }
  return maxLength;
  }
  const strings = ['fish', 'cheese', 'chicken', 'sausage'];
  console.log(longestStringInArray(strings));
  
  //declaration stringsLongerThan
  function stringsLongerThan(arr, length) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length > length) {
      result.push(arr[i]);
      }
    }
  return result;
  }
  var inputArray = ['say', 'hello', 'in', 'the', 'morning'];
  var minlength = 2;
  var resultArray = stringsLongerThan(inputArray, minlength)
  console.log(resultArray);
  
    
    
    
    
    
    
    