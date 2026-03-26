// scope => variables => where variable are accessed

// // TYPES OF SCOPE
// Global => variables declared outside a fuction => accecces anywhere in your program
// Local => variable declared inside a function => accessed with the function
// block => varables declared with curly braces/code block {}

let name = "Titus"

// console.log(name)

function greet(){
    let role = "Software Developer"

    console.log(`How are you ${name}. You are a ${role}`)
}

// greet()

// console.log("This is globally accessed variable--------------------")
// console.log(name)

// console.log("This is locally accessed variable--------------------")
// console.log(role)

age = 20

if(age > 18){
    let message = `You are an adult`
    console.log(message)

}else{
    console.log("You are a child")
}

console.log(message)
