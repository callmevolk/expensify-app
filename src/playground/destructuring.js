// Object destructuring
const person = {
  name: "Ljubiša",
  age: 20,
  location: {
    city: 'Philly',
    temperature: 35
  }
};

const {name: firstName = 'Anonymous', age} = person;

console.log(`${firstName} is ${age}.`);

const {city, temperature: temp} = person.location
if (city && temp) {
  console.log(`it's ${temp} in ${city}.`)
}


const book = {
  title: "Ego is the enemy",
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = "self-published"} = book.publisher

console.log(publisherName);


// Array destructuring

const adress = ['Ulica Vuka Karadžića 8', 'Prnjavor', 'BiH', '78430'];

const [, city2 = "Banja Luka", country] = adress;

console.log(`You are in ${city2}, ${country}.`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , mediumCost] = item;
console.log(`A medium ${coffee} costs ${mediumCost}`);
