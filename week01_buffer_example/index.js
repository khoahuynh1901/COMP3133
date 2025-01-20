// The Buffer object is a global object in Node.js, and it is not necessary to import it using the require keyword. 

// let b1 = Buffer.from("A Hello world") //return array of hexadecimal number in a list
// console.log(b1)
// console.log(b1[0])


// console.log(b1.toString()) //Now this way convert the buffer to string " A Hello world"
// console.log(b1.length)

// let b2 = Buffer.from([65, 66, 89]) //return array of binary number in a list
// console.log(b2)
// console.log(b2[0])
// console.log(b2[1])

// let b3 = Buffer.from(b2)
// console.log(b3.toString())


// let b4 = Buffer.alloc(10) //Alloc to determine the size of the buffer array
// console.log(b4)
// b4.fill('#') //this one will fill alloc byte with ###
// console.log(b4)
// console.log(b4.toString())

// let b5 = Buffer.allocUnsafe(10)
// console.log(b5)

// b5.write("COMP3133")
// console.log(b5)
// console.log(b5.toString())
// console.log(b5.length)


// b5.copy(b4)
// console.log(b4.toString())


// let b7 = Buffer.concat([b4,b5])
// console.log(b7.toString())






var buf = Buffer.from('abc');
console.log(buf);

console.log(buf.toString());


              

