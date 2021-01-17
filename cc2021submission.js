const findSum = function(array) {
  let sum = 0
  for (i = 0; i < array.length; i++){
    sum = sum + array[i];
  }
  return sum;
};
findSum([2,4,6]);

const findFrequency = function(array) { 
  let viewElements = {};
  let returnObj = {};
  for (let i = 0; i < array.length; i++){    
    viewElements[array[i]] = (viewElements[array[i]] || 0)+1;          
      for (let prop in viewElements) {
         if (viewElements[prop] > i){
          returnObj.most = prop;
         } else if (viewElements[prop] <= 1){
           returnObj.least = prop;
         }
      }
  }
  return returnObj;
};
findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd']);

const isPalindrome = function(str) {
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++){
    if(str[i]!==str[(str.length-i-1)]){
      return false;
    }   
  }
  return true;
};
isPalindrome('wonderful');

const largestPair = function(array) {
 product = 0
  for(var i = 0; i < array.length - 1; i++) {
      product = Math.max(product, array[i] * array[i + 1])
  };
  return product;
};
largestPair([9, 5, 10, 2, 24, -1, -48]);

const removeParenth = function(str) {
  return str.replace('(','').replace(')','');
};
removeParenth('ido(not)liketocode');

const scoreScrabble = function(str) {
  let scores = {
    'a':1,
    'b':3, 
    'c':3,
    'd':2,
    'e':1,
    'f':4,
    'g':2,
    'h':4,
    'i':1,
    'j':8,
    'k':5,
    'l':1,
    'm':3,
    'n':1,
    'o':1,
    'p':3,
    'q':10,
    'r':1,
    's':1,
    't':1,
    'u':1,
    'v':4,
    'w':4,
    'x':8,
    'y':4,
    'z':10 
  };
  let sum = 0;
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++){
    letter = str[i]
    sum = sum + scores[letter];  
  }
  return sum;
};
scoreScrabble('hello');
