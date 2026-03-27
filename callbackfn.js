// CallBack function => that is taken as an argument to another function

const greetUser = (name, callbackfn) => {
    console.log(`Welcome ${name}!`)
    callbackfn()

}


function sayGoodBy(){
    console.log("Goood Bye!")
}

greetUser("Nelson", sayGoodBy)

// callback function => sayGoodBy
// arrow function => greetUser
// function declaration => sayGoodBy
// higher order function => receives another function ans an argument/ returns another function =>greetUser e.g Map, filter, reduce, find 