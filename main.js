function countBs(s) {
    let count = 0;
    for (let i=0; i<s.length; i++){
        if(s.charAt(i) === "B"){
            count++;
        }
    }
    return count;
}

console.log(countBs("BasketBall"));

function countBs(s,c) {
    let count = 0;
    for (let i=0; i<s.length; i++){
        if(s.charAt(i) === c){
            count++;
        }
    }
    return count;
}

console.log(countBs("characters","c"));