function isEven(num){
    if (num == 0 ){
    return true;
    } else if (num == 1){
        return false;
    } else if ((num - 2)% 2 == 0 && num > 0){
        return true;
    } else {
        return false;
    }
}

console.log("the number entered is even number "+isEven(50));