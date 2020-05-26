function isEven(num){
    if (num == 0 ){
        return true;
    } else if (num == 1 || num < 0){
        return false;
    }
    else 
    {
        num = num - 2;
        return isEven(num);
    } 
}

console.log("the number entered is even number "+ isEven(12));