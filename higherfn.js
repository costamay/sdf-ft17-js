// Higher order functions => function that receives another function a an arguemnt or returns another function

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let odd_numbers = numbers.filter(function(num){
    return num % 2 !== 0
})

console.log(odd_numbers)

let square  =  numbers.map(x => x**2 )

console.log(square)