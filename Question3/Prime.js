const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

var inputNum ;

rl.question("Enter Number: ", function (value) {
    inputNum = parseInt(value);
  
    // close input stream
    rl.close();
    console.log(`Is Prime: ${isPrime(inputNum)}`)
    console.log(`Next Prime: ${nextPrime(inputNum)}`)
    console.log(`Difference Between Prime And Its NextPrime: ${differenceBTNNextPrime(inputNum)}`);
  });


const isPrime = (num)=>{
    if(num ===1){
        return true
    }
    for(var i=2;i<num;i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

const  nextPrime = (num)=>{
    if (num <= 1)
        return 2;
 
    var prime = num;
    var found = false;
    while (!found) {
        prime++;
        if (isPrime(prime))
            found = true;
    }
 
    return prime;
}

const differenceBTNNextPrime = (num)=>{
    const prime = isPrime(num);
    if(prime){
        const nextprime = nextPrime(num);
        const diff = nextprime - num;
        return diff;
    }
    else{
        let firstnextprime = nextPrime(num);
        let secondnextprime = nextPrime(firstnextprime);
        const diff = secondnextprime - firstnextprime;
        return diff;
    }
}