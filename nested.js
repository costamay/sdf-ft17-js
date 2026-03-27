// nested function => function within a function

function outerfn(){
    let message = "Hello World"

    function innerfn(){
        console.log(message)
    }
    innerfn()

}

outerfn()