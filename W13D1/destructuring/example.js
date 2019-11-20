console.log('Example 1');

const { a: x, b: y } = { a: 1, b: 2 };
console.log(x); // x => 1
console.log(y); // y => 2

const { a, b } = { a: 1, b: 2 };
console.log(x); // x => 1
console.log(y); // y => 2


console.log('Example 1 Experiments')
const { four: banana, five: bear} = { four: 4 * 10, five: 5 * 10 };
console.log(banana); // => 40
console.log(bear); // => 50

// Before destructuring, four and five must be defined
// It will return the value at the time it was defined, not the over ridden value
const { four, five } = { four: 5 * 7, five: 8 * 9 };
console.log(banana, bear); // => 35, 72


console.log('Example 2');
const { a, c } = { a: 1, b: 2, c: 3 };
// a => 1
// c => 3

console.log('Example 2 Experiments');
// If you add another variable when deconstructing, then it redefines both 
// variables 
const { four, six } = { four: 5 * 7, five: 8 * 9, six: 9 * 10 };
console.log(four, six); // => 35, 90 


console.log('Example 3 (Nested)');
const { a: { b } } = { a: { b: 2} };
// a => (undefined)
// b => 2

const { a } = { a: {b} } = { a: { b: 2 } };
// a => { b: 2 }
// b => 2 

const { a: a, a: { b } } = { a: { b: 2 } };
// a => { b: 2 }
// b => 2 


console.log('Example 3 Experiments');
const { flour: { cake } } = { flour: { cake: 'delicious' } };
console.log(flour); // => undefined
console.log(cake); // => 'delicious'

In this case cake has no value, so flour is undefined
Flour must be extrapulated in order to point to the object it originally
points to
const { flour } = { flour: {cake} } = { flour: { cake: 'delicious'} };
console.log(flour); // => { cake: 'delicious' } 
console.log(cake); // => 'delicious'

const { flour: flour, flour: { cake} } = { flour: { cake: 'delicious' } };
console.log(flour, cake) // => { cake: 'delicious', 'delicious' }


console.log('Example 4 (variable or function that returns an object)');
const multiply = n => ({ one: n, two: n * 2, three: n * 3});

const { one, two, three } = multiply(10);
one => 10
two => 20
three => 30

this.props = {
  userId: 1,
  user: {
    fname: 'Ned',
    lname: 'Stark'
  }
};

const { userId, user: { fname, lname } } = this.props;
userId; // => 1
fname; // 'Ned'
lname; // 'Stark' 


console.log('Example 4 Experiments');
const name = char => ( { first: char, last: 'Stark', fullName: char + ' ' + 'Stark' });

const { first, last, fullName } = name('Ned'); 
console.log(first); // => 'Ned'
console.log(last); // => 'Stark'
console.log(fullName); // => 'Ned Stark'

this.props = {
  castles: 9,
  facts: {
    season: 'Winter',
    slogan: 'Winter is coming'
  }
};

const {facts} = { castles, facts: { season, slogan } } = this.props; 
console.log(castles); // => 9
console.log(season); // => 'Winter'
console.log(slogan); // => 'Winter is coming' 
console.log(facts); // => { season: 'Winter', slogon: 'Winter is coming' }; 


console.log('Parameters');
const review = {
  id: 1, 
  userId: 2,
  movie: 'Star Wars',
  comment: 'Will be awesome',
  rating: 5
};

const user = {
  id: 2,
  fname: 'Ned',
  lname: 'Stark'
};


console.log('Example 1');

// // printUser can receive an obj
const printReviewUser = ({ userId: id }) => {
//   // code to fetch user object via userId
  const user = fetchUserById(id);
  console.log(`${user.fname} ${user.lname}`);
};

const printReview = ({ movie, comment, rating }) => {
  console.log(`Watched ${movie}`);
  console.log(`Gave it ${rating} stars!`);
  console.log(`${comment}`);
};

printReviewUser(review);
// // Ned Stark

printReview(review);
// // Watched Star Wars
// // Gave it 5 stars!


console.log('Parameters Example 1 Experiments');
console.log()
console.log('Parameters');

const book = {
  id: 399,
  name: 'This awesome book',
  publisher: 'Penguin Publishers',
  distributor: 'Delivery LLC.',
  authorId: '3',
  noSold: 1000000,
  reviews: 10000,
  featured: 'Time Magazine',
}

const author = {
  id: 3,
  fName: 'Ned',
  lName: 'Stark',
  school: 'Winterfell College',
  commentary: 'Mr. Dean Winterfel'
}

console.log('Example 1 Experiments')

// Note: id is a parameter we pass into the deconstructed object
const printBookAuthor = ({ authorId: id }) => {
  // We want to fetch the author
  const author = fetchAuthorId(id); 
  console.log(`${author.fName} ${author.lName}`); // => 'Ned Stark'
  console.log(`${author.school} ', Commentary: '${author.commentary}`); // => 'Winterfel College, Commentary: Mr. Dean Winterfel'
};

const printBook = ({ name, publisher, noSold, featured, }) => {
  console.log(`Read ${name}.`);
  console.log(`Glad we chose ${publisher} as a publisher!`);
  console.log(`Can not believe we sold ${noSold} copies!`);
  console.log(`It was even featured in ${featured}.`);
};

// Remember to pass in the entire object
printBookAuthor(book);
// 'Ned Stark'
// 'Winterfel College, Commentary: Mr. Dean Winterfel'

// Remember to pass in the entire object
printBook(book);
// => 'Read This Awesome Book.'
// => 'Glad we chose Penguin Publishers as a publisher!'
// => 'Can not believe we sold 1000000 copies!
// => 'It was even featured in Time Magazine.' 