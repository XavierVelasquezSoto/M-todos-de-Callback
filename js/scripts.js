//# Ejercicios

//## Arrays métodos callback

// 1- Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const numberMulti = numbers => {    
    numbers.forEach((number, index) => {
    console.log(number*index)
})
}

numberMulti([1 ,4 ,6 ,10 ,1])


// 2- Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const numberDivided = number => {
    const resultNumbers = number.map((number,index) => {
    return number / (index + 1)
    })
    return resultNumbers
}

const result = numberDivided([2 ,4 ,7 ,9 ,13])
console.log(result)


// 3- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.


const letterUpper = letters => {
    const letterContainer = letters.map(letter =>{
    return letter.toUpperCase()
    })
    return letterContainer
}

const resultLetterUpper = letterUpper(["teclado", "edificio", "ordenador"])
console.log(resultLetterUpper)


//4- Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas y minúsculas.

const wordsCoincidence = (word, letter) => {
    const wordContainer = word.filter( word => word.toLowerCase().startsWith(letter))
    if  (wordContainer.length > 0){
    return wordContainer;
    }
    return `No coincide la letra`
}

const resultWordsCoincidence1 = wordsCoincidence(["Palabra", "armadura", "cadena", "Hoguera", "Alfabeto"], "a")
console.log(resultWordsCoincidence1)

const resultWordsCoincidence2 = wordsCoincidence(["palabra", "armadura", "cadena", "hoguera", "alfabeto"], "X")
console.log(resultWordsCoincidence2)


//5- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const tenNumbers = (number) => {
    const tenNumbersContainer = number.reduce((acc,number) => {
        return acc + number
    })
    return tenNumbersContainer
}
const resultTenNumbers = tenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(resultTenNumbers)


//6- Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
 /*   "Número: 2 - Cuadrado: 4 - Cubo: 8".    */


 const tenNumbersCalculate = (number) => {
     number.forEach(number => {
        console.log(`Número: ${number} - Cuadrado: ${Math.pow(number,2)} - Cubo: ${Math.pow(number,3)}`)
    })
 }
 tenNumbersCalculate([3,7,12,15,32,22,9,50,36,73])


//7- Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.


const vocal = "aeiou"

const wordUpper = letter => { 
    const wordUpperContainer = letter.map( letter => { letter.split("").toUpperCase()
        console.log(wordUpperContainer)
    })


}

wordUpper("bienvenido")

//8- Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

/* const highNumber = number =>{
  const resultHighNumber = number.some((number) => number > 5)   
  console.log(`Los números mayores son ${resultHighNumber}`)
}

highNumber([13,17,2,1,4,25,12,3,21,15]) */

const highNumber = number =>{
  const resultHighNumber = number.filter((number) => number > 5)   
  console.log(`Los números mayores son ${resultHighNumber}`)
}

highNumber([13,17,2,1,4,25,12,3,21,15])

//9- Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']


const fiveWords = (words, letter) =>{ 
    const fiveWordsContainer = words.filter(words => words.length === letter)
    return fiveWordsContainer
}

resultFiveWords = fiveWords(["Correa", "Cita", "Ahogar", "Nieta", "Horrible"],6)
console.log(resultFiveWords)

//10- Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número



//11- Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
  /*   
  const array = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Bob', age: 20 }
  ]; 
  */

//12- Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

//13- Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

//14- Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

//## Retos!!

//15- Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

//  - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

/* 
    [
    {
    id: "user001",
    name: "Juan",
    surname: "Pérez",
    age: 30
    },
    {
    id: "user002",
    name: "María",
    surname: "González",
    age: 25
    },
    {
    id: "user003",
    name: "Pedro",
    surname: "Sánchez",
    age: 35
    },
    {
    id: "user004",
    name: "Ana",
    surname: "Martínez",
    age: 28
    },
    {
    id: "user005",
    name: "Luis",
    surname: "López",
    age: 40
    }
    ];
 */