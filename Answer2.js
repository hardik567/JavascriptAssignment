let factorial = ( num ) => {
let fact = 1
for( i = num ; i >= 2 ; i-- ){
fact = fact * i 
console.log(fact)
}
return fact
 }
console.log(factorial(3) )