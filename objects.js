// Object => collection of unordered key, value pair data/items enclosed in curly braces

let person = {
    first_name : "Victor",
    middle_name : "Nelson",
    age: 20,
    gender: "Male",
    occupation: "Student",
    address: {
        zipCode: "00100",
        city: "Nairobi"
    },
    friends: ["Alex", "Alvin", "Caroline"],
    language: function(){
        console.log("I speak english")
    }
}
console.log(person.friends[2])
// console.log(person.address.city)
// console.log(person["address"]["zipCode"])

// console.log(person.language())
// console.log(person)

// accessing values from Object
// we acces values using keys
// 1.Dot notation
// 2.bracket notation

// console.log(person.occupation)

// console.log(person["first_name"])

// person.age = 25

// person.height = 6
// console.log(person.height)

// console.log(person)