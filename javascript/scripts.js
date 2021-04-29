// console.log('Bem vindo ao Starter !!')

// console.log({       //se é uma funcionalidade, então é um metodo pois o mesmo está dentro de um objeto.
//     name: "Ragner",
//     idade: 28,
//     andar: function(){
//         console.log('andar')
//     }
// })

// console.log([           //array
//     "Ovos",
//     "Leite",
//     "Pão",
//     2,
//     3
// ])

//type conversion (typecasting) vs type version

//console.log('9' + 5) //type corsion
//console.log(Number('9' + 5)) //type conversion

//strings e números

// let world = 'paralelelpipedo'
// console.log(world.length)
// let number = 1234
// console.log(String(number.length))

// let number = 34.34576474
// console.log(number.toFixed(2).replace('.', ','))

//transformando letras minusculas em letras maiusculas

// let word = 'Programar é muito bacana'
// console.log(word.toUpperCase())

// let mundo = 'Programar é muito bacana'
// console.log(mundo.toLowerCase())

//separa texto que tem espaços que contem espaços, em um novo array onde cada texto pe uma posição doa rray. Depois disso,
// transofmre o array em um texto  e onde eram espaços coloque _

// let phrase = 'Eu quero viver o Amor !!!'
// let myArray = phrase.split(' ')
// let phraseWhitUnderscore = myArray.join('_')
// console.log(phraseWhitUnderscore)

// verificar seum texto contem uma palavra especifica

// let phrase = "Eu amo minha vida !!"
// console.log(phrase.includes('amor'))

// criar um arrary com constructor
// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

//contar elementos de um array

//console.log(['a', {type:'b'}, function() return  {'c'}])

//transofrma um cadeia de caracteres em um array

// let word = 'manipulacao'
// console.log(Array.from(word))

// manipulando array
// let techs = ['html', 'css', 'js']

//add item no fim do array
// console.log(techs.push('nodejs'))

//add item no inicio
// techs.unshift('sql')

//remover do fim
// techs.pop()

//remover do começo
// techs.shift()

//pega somente alguns elementos do array
// console.log(techs.slice(1, 3))

//remover 1 ou mais itens em qualquer posição do Array
// techs.splice(1, 1)

//encontrar a posição de um elemento no array
// let index = techs.indexOf('css')  //buscar qual elemento do array
// techs.splice(index, 1) 
// console.log(index)
