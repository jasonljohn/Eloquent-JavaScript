for (let i=1; i <= 100; i++) {
    let key;
    if(i%3 == 0 && i%5 == 0){
        key= 'FizzBuzz';
        console.log(key);
    } else if (i%5 == 0){
        key = 'Buzz';
        console.log(key);
    } else if (i%3 == 0){
        key = 'Fizz';
        console.log(key);
    } else {
        console.log(i);
    }
}
