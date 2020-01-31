// Callback Code Example
const calculator = function (operationCb) { // higher-order function
  return function (op1, op2) { // closure
    console.log(`calling with ${op1} ${op2}`);
    const result = operationCb(op1, op2); // result is now the return value which also has a console.log first!
    console.log(`equals ${result}`);
  };
}

const addition = function (n1, n2) {
  console.log(`${n1} + ${n2}`);
  return n1 + n2; // this is the return value 
}

const adder = calculator(addition);
adder(1, 2);
// calling 1 2
// 1 + 2
// equals 3


// Functions within functions example
const composeOrg = function (f, g) {
  return function (x) {
    // console.log(f);
    // console.log(g);
    // console.log(f(g(x))); 
    return f(g(x)); // I do not understand why f passes g and g passes x ?
  };
};

// Does the following
const timesTwo = (num) => num * 2;
const plusSix = (num) => num + 6;

const plusThenTimes = composeOrg(timesTwo, plusSix);
console.log(plusThenTimes(3)); // => 18

const timesThenPlus = composeOrg(plusSix, timesTwo);
console.log(timesThenPlus(3)); //=> 12


// Functions with three arguments
const compose3 = function(f, g, h) {
  return function(x) {
    return function(z) {
      return f(g(x(h(z))));
    };
  };
};

// Does the following
const divideTen = (num) => num / 10;

const timesPlusDivide = compose3(timesTwo, plusSix, divideTen);
const result1 = timesPlusDivide(timesTwo);
console.log(result1(2)); 


// Without the additional function
const compose1 = function (f, g, h) {
	return function (x) {
		return f(g(h(x)));
	}
};

const func2 = compose1(timesTwo, divideTen, plusSix);
const result2 = func2(2);
console.log(result2);


// More examples
const compose = function(f, g, h) {
  return function(x) {
    return function(z) {
      return f(g(x(h(z))));
    };
  };
};

const timesTen = num => num * 10;
const divideFour = num => num / 4;
const plusTen = num => num + 10;

const func = compose(timesTen, divideFour, plusTen);
const otherFunc = func(plusTen);
console.log(otherFunc(2));

// Without the additional function
const composeThree = function(f, g, h) {
  return function(x) {
    return f(g(h(x)));
  };
};

const funcTwo = composeThree(timesTen, divideFour, plusTen);
const result = funcTwo(2);
console.log(result);

// Capitalizes first letter and adds a period at the end
const compose2 = function(f, g) {
  // takes in the functions
  return function(sentence, punctuation) {
    // does f or g represent this function?
    return f(g(sentence, punctuation)); // punctuate represents g and needs two arguments
  };
};

const capitalize = function(sentence) {
  let words = sentence.split(" ");
  let newSen = words[0][0].toUpperCase() + words[0].slice(1);
  return [newSen].concat(words.slice(1)).join(" "); // JS does not add arrays, use concat
};

const punctuate = function(sentence, punctuation) {
  return sentence + punctuation;
};

let sentence = "the big brown dog barked";
const formatSentence = compose2(capitalize, punctuate);
const formatted = formatSentence(sentence, "!");

console.log(capitalize(sentence));
console.log(punctuate(sentence, "!"));
console.log(formatted);

// Change a name to a URI
/*
  Think of this way - a function can't run until its argument has been resolved. 
  When we write dashes(lowercase(split(x)));, the outermost function tries to 
  run first. However, dashes can't run until lowercase finishes executing. 
  And lowercase can't run until split finishes executing. So ultimately, the 
  functions end up evaluating from in to out.

  Using function composition, we can chain together a series of simple functions 
  in order to perform something pretty complex. This can make our code a lot more 
  readable. 
*/

const changeToURI = (dashes, lowercase, split) => {
  return function(x) {
    return dashes(lowercase(split(x)));
  };
};

const split = sentence => {
  return sentence.split(" ");
};

const lowercase = array => {
  return array.map(word => word.toLowerCase());
};

const dashes = lowercase => {
  return lowercase.join("-");
};

let sentence1 =
  "The boys went down to the river with Jane and Sarah to catch fish";
console.log(split(sentence1)); // okay
console.log(lowercase(split(sentence1))); // convoluted
console.log(dashes(lowercase(split(sentence1)))); // ugly

let changedToUri = changeToURI(dashes, lowercase, split); // solution to use composite function
let formattedURI = changedToUri(sentence1);
console.log(formattedURI);


// Another example
const abbriviatedCap = (func1, func2, func3, func4) => {
	return function (x) {
		return func4(func3(func2(func1(x))));
	};
};

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Chars = (string) => string.substring(0, 6);
const reverse = (string) => string
	.split('')
	.reverse()
	.join('');

console.log(reverse(get6Chars(uppercase(getName({ name: 'Buckethead' })))));

const abbriviatedCapWord = abbriviatedCap(getName, uppercase, get6Chars, reverse);
const finalResult = abbriviatedCapWord({ name: 'Buckethead' });
console.log(finalResult);  


// Higher Order Function Written Using ES6 Fat Arrow Syntax
function foo1(arg1) {
  return function(arg2) {
    return function(arg3) {
      console.log(`${arg1} came before ${arg2} and ${arg3} came last`);
    };
  };
}

// ES6:
const foo2 = arg1 => arg2 => arg3 => {
  console.log(`${arg1} came before ${arg2} and ${arg3} came last`);
  return arg1 + ' ' + arg2 + ' ' + arg3;
};

const higherOrder1 = foo2('Vanilla');
const higherOrder2 = higherOrder1('Bean');
const higherOrder3 = higherOrder2('Ice Cream Is Tasty :)P');
console.log(higherOrder3);