// constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getPersonDetails = function () {
        return `${this.firstName} is ${this.age} years old`
    }
}

const newPerson = new Person('Jay', 'Jay', 24)
const newPerson2 = new Person('Arnas', 'Soko', 26)

// add function to Person
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}


console.log(newPerson.getPersonDetails())
console.log(newPerson2.getPersonDetails())
console.log(newPerson2.getFullName())


/*****************************************************/

// es6 version

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

/*****************************************************/

// IIFE

(function () {
    const greeting = 'Hello world';
    console.log(greeting)
})()

/*****************************************************/

// Closures
function Animal(name) {
    const displayName = function (greeting) {
        console.log(`${greeting} ${name}`)
    }

    return displayName;
}

const newAnimal = Animal('Jay');

newAnimal('Hello')

/*****************************************************/

