// 1. Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.
  //Some methods that help us utilize promises are: .resolve(), .all(), .race(), .reject()

const testNum = num => {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(num + ' is greater than 10');
    } else {
      reject(num + ' is less than 10');
    }
  });
};

testNum(9)
  .then(result => console.log(result))
  .catch(error => console.log(error));

testNum(11)
  .then(result => console.log(result))
  .catch(error => console.log(error));

// 2. Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.

const makeAllCaps = words => {
  return new Promise((resolve, reject) => {
    if (
      words.every(word => {
        return typeof word === 'string';
      })
    ) {
      resolve(
        sortWords(
          words.map(word => {
            return word.toUpperCase();
          })
        )
      );
    } else {
      reject('Not a string!');
    }
  });
};

const sortWords = words => {
  return new Promise((resolve, reject) => {
    if (words) {
      resolve(words.sort());
    } else {
      reject('strings only!');
    }
  });
};

const theseAreWords = ['try', 'makeAllCaps', 'prac(?)tice', 'sortWords','theseAreNotWords' ];

  //.then() is triggered when fetch gets a successful response from the server. 
  //.catch() is triggered when something went wrong with the request.
makeAllCaps(theseAreWords)
  .then(sortWords(theseAreWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));

const theseAreNotWords = [1, 'hello', 9];

makeAllCaps(theseAreNotWords)
  .then(sortWords(theseAreNotWords))
  .then(result => console.log(result))
  .catch(error => console.log(error));
 