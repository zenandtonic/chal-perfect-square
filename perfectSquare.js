function perfectSquare(n) {
    var root;
    var next;
    if(Math.sqrt(n) % 1 === 0){
        root=Math.sqrt(n)
        next = root + 1
    } else {
        return -1;
    }
    return (next * next);
}

console.log(perfectSquare(25))