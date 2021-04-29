
//function expression
//function anonymous
//parametros da function

// const sum = function(number1,number2){
//     total = (number1 + number2)

//     return total
// }

// let number1 = 34
// let number2 = 25

// sum(number1, number2) //argumentos

// console.log(`o número 1 é ${number1}`)
// console.log(`o número 2 é ${number2}`)
// console.log(`A soma é ${sum(number1, number2)}`)
// console.log(total)

//function scope
// let subject

// function creatThink(subject){
//     subject = 'study'
//     return subject
// }

// console.log(subject)
// creatThink()
// console.log(subject)

//function hoisting

// sayMane()

// const sayMane = fucntion sayMane(){
//     console.log('Titio')
// }

//arrow function

// const sayMyName = (name) => {
//     console.log(name)
// }

// sayMyName('Titio')

//call back function 

// function sayMyName(name) {
//     name()    
// }

// sayMyName(
//     () =>{
//         console.log('estou em uma call back')
//     }
// )

//construtores

function Person(name) {
    this.name = name
    this.walk = function(){
        return this.name + 'está andando'
    }
}
const titio = new Person('Titio')
console.log(titio.walk)
const myke = new Person('Myke')
console.log(myke.walk)

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + ' esta andando'
    }
}

const titio = new Person('Titio')
console.log(titio.walk())
const manoel = new Person('Manoel')
console.log(manoel.walk())