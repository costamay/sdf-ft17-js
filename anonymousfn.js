// Anonymous function/function expression/immediately invoked function => function without a name => accessed through a varable

function greet(name){

}

function multiplication(){}

let greet = () => {}

let greet = function(name){
    console.log(`How are you ${name}`)
}

greet("Caroline")
greet("Alvin")